// import ejs from 'ejs';
// import path from 'path';

import { success, reject } from '../index';
import {
    isValidUser,
} from '../../helpers/validators';
import { formatUserForInsertion } from '../../helpers/formatters';
import { encryptPassword } from '../../crypt';
import {
    addUser,
    getUserByEmail,
    getUserByLogin,
} from '../../services';
import {
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
        return reject(res, ERROR_MESSAGES.PROFILE.CREATE_PROFILE_ERROR);
    }
}
