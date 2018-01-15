import { extractIdFromToken, getUser, updateUser, verifyJWToken } from '../../services';
import { reject, success } from '../index';
// import { isValidToken } from '../../helpers/validators/users';
import {
    ERROR_MESSAGES,
    TABLES,
} from '../../constants';

export async function activateProfile(req, res) {
    try {
        const { token } = req.params;

        const verifyToken = await verifyJWToken(token);
        if (!verifyToken) {
            return reject(res, ERROR_MESSAGES.PROFILE.EXPIRED_CODE);
        }

        const userId = await extractIdFromToken(token);
        const user = await getUser(userId);
        if (!user) {
            return reject(res, ERROR_MESSAGES.PROFILE.USER_NOT_EXIST);
        } else if (user[TABLES.USERS.COLUMNS.IS_ACTIVATED]) {
            return reject(res, ERROR_MESSAGES.PROFILE.USER_ALREADY_ACTIVATED);
        }

        const result = await updateUser(userId, { [TABLES.USERS.COLUMNS.IS_ACTIVATED]: true });
        if (!result) {
            return reject(res, ERROR_MESSAGES.PROFILE.ACTIVATION_ERROR);
        }

        return success(res);
    } catch (error) {
        return reject(res, ERROR_MESSAGES.PROFILE.ACTIVATION_ERROR);
    }
}
