import { success, reject } from '../index';
import {
    isValidUser,
    isValidLogInData,
    isValidCardNumber,
} from '../../helpers/validators';
import { formatUserForInsertion, formatLogInData, formatPaymentCredentials } from '../../helpers/formatters';
import { encryptPassword } from '../../crypt';
import {
    addUser,
    getUserByEmail,
    getUserByLogin,
    getTokenForUser,
} from '../../services';
import {
    TABLES,
    ERROR_MESSAGES,
    USER_ROLES,
} from '../../constants';
import * as services from '../../services';
import _ from 'lodash';

export async function createProfile(req, res) {
    try {
        const profileData = formatUserForInsertion(req.body.profileData);

        let paymentCredentialsData = {};
        let isCardNumberValid = true;
        if (req.body.profileData[TABLES.PAYMENT_CREDENTIALS.COLUMNS.NUMBER]) {
            paymentCredentialsData = formatPaymentCredentials({
                ... req.body.profileData
            });

            isCardNumberValid = isValidCardNumber(paymentCredentialsData[TABLES.PAYMENT_CREDENTIALS.COLUMNS.NUMBER]);
        }

        let profileDataValidationInfo = isValidUser(profileData);
        if (!isCardNumberValid) {
            if (!profileDataValidationInfo) {
                profileDataValidationInfo = {};
            }
            profileDataValidationInfo[TABLES.PAYMENT_CREDENTIALS.COLUMNS.NUMBER] = ERROR_MESSAGES.VALIDATION.INVALID_CARD_NUMBER;
        }
        if (profileDataValidationInfo) {
            return reject(res, ERROR_MESSAGES.PROFILE.INVALID_PROFILE_DATA, profileDataValidationInfo);
        }

        const userWithEmail = await getUserByEmail(profileData[TABLES.USERS.COLUMNS.EMAIL]);
        if (userWithEmail) {
            return reject(res, ERROR_MESSAGES.PROFILE.EMAIL_ALREADY_USED, {
                [TABLES.USERS.COLUMNS.EMAIL]: profileData[TABLES.USERS.COLUMNS.EMAIL]
            });
        }

        const userWithLogin = await getUserByLogin(profileData[TABLES.USERS.COLUMNS.LOGIN]);
        if (userWithLogin) {
            return reject(res, ERROR_MESSAGES.PROFILE.LOGIN_ALREADY_USED, {
              [TABLES.USERS.COLUMNS.LOGIN]: profileData[TABLES.USERS.COLUMNS.LOGIN]
            })
        }

        const { encryptedPassword, salt } = await encryptPassword(profileData[TABLES.USERS.COLUMNS.PASSWORD]);
        profileData[TABLES.USERS.COLUMNS.PASSWORD] = encryptedPassword;
        profileData[TABLES.USERS.COLUMNS.KEY] = salt;

        if (!_.isEmpty(paymentCredentialsData)) {
            profileData[TABLES.USERS.COLUMNS.ROLE] = USER_ROLES.DONATOR;
        }

        const user = await addUser(profileData);

        if (!_.isEmpty(paymentCredentialsData)) {
            try {
                paymentCredentialsData[TABLES.PAYMENT_CREDENTIALS.COLUMNS.USER_ID] = user.id;
                await services.insertPaymentCredentials(paymentCredentialsData);
            } catch (err) {
                return reject(res, ERROR_MESSAGES.PROFILE.ADD_PAYMENT_CREDENTIALS_ERROR);
            }
        }

        delete user[TABLES.USERS.COLUMNS.PASSWORD];
        delete user[TABLES.USERS.COLUMNS.KEY];

        return success(res, { user });
    } catch(error) {
        return reject(res, ERROR_MESSAGES.PROFILE.CREATE_PROFILE_ERROR);
    }
}

export async function logIn(req, res) {
    try {
        const logInData = formatLogInData(req.body.logInData);

        if (!logInData[TABLES.USERS.COLUMNS.LOGIN] && !logInData[TABLES.USERS.COLUMNS.EMAIL]) {
            return reject(res, ERROR_MESSAGES.PROFILE.LOGIN_OR_EMAIL_SHOULD_BE_PASSED);
        }

        const logInDataValidationInfo = isValidLogInData(logInData);
        if (logInDataValidationInfo) {
            return reject(res, ERROR_MESSAGES.PROFILE.INVALID_LOG_IN_DATA, {logInDataValidationInfo});
        }

        let user;

        if (logInData[TABLES.USERS.COLUMNS.LOGIN]) {
            user = await getUserByLogin(logInData[TABLES.USERS.COLUMNS.LOGIN]);
        } else {
            user = await getUserByEmail(logInData[TABLES.USERS.COLUMNS.EMAIL]);
        }

        if (!user) {
            return reject(res, ERROR_MESSAGES.PROFILE.USER_NOT_EXIST, { logInData });
        }

        if (user[TABLES.USERS.COLUMNS.PASSWORD_ATTEMPTS] >= 5) {
            return reject(res, ERROR_MESSAGES.PROFILE.USER_IS_BLOCKED);
        }

        const { encryptedPassword } = await encryptPassword(logInData[TABLES.USERS.COLUMNS.PASSWORD], user[TABLES.USERS.COLUMNS.KEY]);

        if (user[TABLES.USERS.COLUMNS.PASSWORD] !== encryptedPassword) {
            if (user[TABLES.USERS.COLUMNS.PASSWORD_ATTEMPTS] >= 4) {
                await services.blockUser(user.id);
                return reject(res, ERROR_MESSAGES.PROFILE.USER_IS_BLOCKED);
            }

            await services.addPasswordAttempt(user.id);

            return reject(res, ERROR_MESSAGES.PROFILE.WRONG_PASSWORD, {
                [TABLES.USERS.COLUMNS.PASSWORD]: logInData[TABLES.USERS.COLUMNS.PASSWORD],
            });
        }

        delete user[TABLES.USERS.COLUMNS.PASSWORD];
        delete user[TABLES.USERS.COLUMNS.KEY];

        const token = await getTokenForUser(user);

        return success(res, { token, user });
    } catch (error) {
        console.log(error);
        return reject(res, ERROR_MESSAGES.PROFILE.LOG_IN_ERROR);
    }
}
