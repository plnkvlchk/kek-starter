import ejs from 'ejs';
import path from 'path';

import { success, reject } from '../index';
import {
    isValidUser,
    isValidUUID,
    isValidEmail,
    isValidToken,
} from '../../helpers/validators';
import { formatUserForInsertion } from '../../helpers/formatters';
import { encryptPassword } from '../../crypt';
import {
    sendEmail,
    addUser,
    getUserByEmail,
    deleteSignUpCode,
    getUserByLogin,
    getSignUpCode,
    getJWToken,
    getUser,
    verifyJWToken,
    extractIdFromToken, updateUser,
} from '../../services';
import {
    ACTIVATION_LINK,
    RESET_PASSWORD_LINK,
    TABLES,
    ERROR_MESSAGES,
} from '../../constants';

export async function createProfile(req, res) {
    try {
        const profileData = formatUserForInsertion(req.body.profileData);

        const profileDataValidationInfo = isValidUser(profileData);
        if (profileDataValidationInfo) {
            return reject(res, ERROR_MESSAGES.INVALID_PROFILE_DATA, profileDataValidationInfo);
        }

        const userWithEmail = await getUserByEmail(profileData[TABLES.USERS.COLUMNS.EMAIL]);
        if (userWithEmail) {
            return reject(res, ERROR_MESSAGES.EMAIL_ALREADY_USED, {
                [TABLES.USERS.COLUMNS.EMAIL]: profileData[TABLES.USERS.COLUMNS.EMAIL]
            });
        }

        const userWithLogin = await getUserByLogin(profileData[TABLES.USERS.COLUMNS.LOGIN]);
        if (userWithLogin) {
            return reject(res, ERROR_MESSAGES.LOGIN_ALREADY_USED, {
              [TABLES.USERS.COLUMNS.LOGIN]: profileData[TABLES.USERS.COLUMNS.LOGIN]
            })
        }

        const { encryptedPassword, salt } = await encryptPassword(profileData[TABLES.USERS.COLUMNS.PASSWORD]);
        profileData[TABLES.USERS.COLUMNS.PASSWORD] = encryptedPassword;
        profileData[TABLES.USERS.COLUMNS.KEY] = salt;

        const user = await addUser(profileData);

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
        return reject(res, ERROR_MESSAGES.INSERTION_FAILED, { error });
    }
}

export async function resendEmailConfirmation(req, res) {
    try {
        const userId = req.body[TABLES.USERS.COLUMNS.ID];
        const userIdValidationInfo = isValidUUID(userId);

        if(!userIdValidationInfo) {
            const error = {
                [TABLES.USERS.COLUMNS.ID]: ERROR_MESSAGES.NOT_VALID,
            };

            return reject(res, error);
        }

        const user = await getUser(userId);
        if (!user) {
            const error = {
                [TABLES.USERS.COLUMNS.ID]: ERROR_MESSAGES.USER_NOT_EXIST,
            };

            return reject(res, error);
        }

        const invitation = await getJWToken({ id: user.id }, '1d');
        const link = `${ACTIVATION_LINK}${invitation}`;

        const header = 'Email confirmation';
        const filename = path.resolve(__dirname, '../../templates/sign-up.ejs');
        const data = { link };
        const options = {};

        ejs.renderFile(
            filename,
            data,
            options,
            (error, template) => {
                if(!error) {
                    sendEmail(user.email, header, template);
                }
            }
        );

        return success(res);
    } catch(error) {
        console.error(error);
        return reject(res, ERROR_MESSAGES.RESEND_FAILED);
    }
}

export async function resetPassword(req, res) {
    try {
        const email = req.body[TABLES.USERS.COLUMNS.EMAIL];

        const emailValidationInfo = isValidEmail(email);
        if(!emailValidationInfo) {
            const error = {
                [TABLES.USERS.COLUMNS.EMAIL]: ERROR_MESSAGES.NOT_VALID,
            };

            return reject(res, error);
        }

        const user = await getUserByEmail(email);
        if(!user) {
            const error = {
                [TABLES.USERS.COLUMNS.EMAIL]: ERROR_MESSAGES.USER_NOT_EXIST,
            };

            return reject(res, error);
        }

        const invitation = await getJWToken({ id: user.id }, '1d');
        const link = `${RESET_PASSWORD_LINK}${invitation}`;

        const header = 'Reset password';
        const filename = path.resolve(__dirname, '../../templates/reset-password.ejs');
        const data = { link };
        const options = {};

        ejs.renderFile(
            filename,
            data,
            options,
            (error, template) => {
                if(!error) {
                    sendEmail(user.email, header, template);
                }
            }
        );

        return success(res);
    } catch(error) {
        console.error(error);
        return reject(res, ERROR_MESSAGES.PASSWORD_RESET_FAILED);
    }
}

export async function updatePassword(req, res) {
    try {
        const { password, token } = req.body;

        const tokenValidationInfo = isValidToken(token);
        if(tokenValidationInfo) {
            const error = {
                token: ERROR_MESSAGES.INVALID_TOKEN,
            };

            return reject(res, error);
        }

        const verifyTokenInfo = await verifyJWToken(token);
        if(!verifyTokenInfo) {
            const error = {
                token: ERROR_MESSAGES.INVALID_TOKEN,
            };

            return reject(res, error);
        }

        const userId = await extractIdFromToken(token);
        const user = await getUser(userId);
        if(!user) {
            return reject(res, ERROR_MESSAGES.USER_NOT_EXIST);
        }
        const { encryptedPassword, salt } = await encryptPassword(password);

        const result = await updateUser(
            userId,
            {
                [TABLES.USERS.COLUMNS.PASSWORD]:  encryptedPassword,
                [TABLES.USERS.COLUMNS.KEY]: salt,
            },
        );
        if (!result) {
            return reject(res, ERROR_MESSAGES.PASSWORD_UPDATE_ERROR);
        }

        return success(res);
    } catch(error) {
        console.error(error);
        return reject(res, ERROR_MESSAGES.PASSWORD_UPDATE_ERROR);
    }
}
