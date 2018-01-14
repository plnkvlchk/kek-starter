// import ejs from 'ejs';
// import path from 'path';

import { success, reject } from '../index';
import {
    isValidUser,
    isValidLogInData,
} from '../../helpers/validators';
import { formatUserForInsertion, formatLogInData } from '../../helpers/formatters';
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
} from '../../constants';
import * as services from '../../services';

export async function createProfile(req, res) {
    try {
        const profileData = formatUserForInsertion(req.body.profileData);

        const profileDataValidationInfo = isValidUser(profileData);
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

        const user = await addUser(profileData);

        delete user[TABLES.USERS.COLUMNS.PASSWORD];
        delete user[TABLES.USERS.COLUMNS.KEY];

        // const invitation = await getJWToken({ id: user.id }, '1d');
        // const link = `${ACTIVATION_LINK}${invitation}`;
        //
        // const header = 'Registration';
        // const filename = path.resolve(__dirname, '../../templates/sign-up.ejs');
        // const data = { link };
        // const options = {};
        //
        // ejs.renderFile(
        //     filename,
        //     data,
        //     options,
        //     (error, template) => {
        //         if(!error) {
        //             sendEmail(user.email, header, template);
        //         }
        //     }
        // );

        return success(res, { user });
    } catch(error) {
        console.log(error);
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

        const { encryptedPassword } = await encryptPassword(logInData[TABLES.USERS.COLUMNS.PASSWORD], user[TABLES.USERS.COLUMNS.KEY]);

        if (user[TABLES.USERS.COLUMNS.PASSWORD] !== encryptedPassword) {
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
