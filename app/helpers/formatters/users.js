import { TABLES } from '../../constants';

const columns = TABLES.USERS.COLUMNS;

export function formatUserForInsertion(rawUser) {
    return {
        [columns.LOGIN]: rawUser[columns.LOGIN],
        [columns.COUNTRY]: rawUser[columns.COUNTRY],
        [columns.EMAIL]: rawUser[columns.EMAIL].toLowerCase(),
        [columns.PASSWORD]: rawUser[columns.PASSWORD],
        [columns.PASSWORD_ATTEMPTS]: 0,
        [columns.IS_ACTIVATED]: false,
        [columns.IS_BLOCKED]: false,
    };
}
