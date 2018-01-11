import { TABLES } from '../../constants/tables';
import { success, reject } from '../index';
import { getUserByEmail } from '../../services/users';
import { encryptPassword, getTokenForUser } from '../../crypt';
import { isValidLogInData } from '../../helpers/validators/session';

const MESSAGES = {

};

export async function logIn(req, res) {
    try {
        const columns = TABLES.USERS.COLUMNS;

        const logInData = req.body;

        const logInDataValidationInfo = isValidLogInData(logInData);
        if(logInDataValidationInfo) {
            return reject(res, { logInDataValidationInfo }, MESSAGES.invalidData);
        }

        const user = await getUserByEmail(logInData[columns.EMAIL]);
        if (!user) {
            const wrongProfile = {
                [columns.EMAIL]: logInData[columns.EMAIL],
            };

            return reject(
                res,
                wrongProfile,
                MESSAGES.profileNotExist);
        }

        const { encryptedPassword } = await encryptPassword(logInData[columns.PASSWORD], user[columns.KEY]);

        if (!(user[columns.PASSWORD] === encryptedPassword)) {
            const wrongPassword = {
                [columns.PASSWORD]: logInData[columns.PASSWORD],
            };

            return reject(
                res,
                wrongPassword,
                MESSAGES.wrongPassword
            );
        }

        const token = await getTokenForUser(user);

        return success(res, { token });
    } catch (error) {
        return reject(res, { error });
    }
}
