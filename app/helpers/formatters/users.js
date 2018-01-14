import { TABLES } from '../../constants';

const columns = TABLES.USERS.COLUMNS;

export function formatUserForInsertion(rawUser) {
    const user = {
      [columns.LOGIN]: rawUser[columns.LOGIN],
      [columns.COUNTRY]: rawUser[columns.COUNTRY],
      [columns.EMAIL]: rawUser[columns.EMAIL],
      [columns.PASSWORD]: rawUser[columns.PASSWORD],
      [columns.PASSWORD_ATTEMPTS]: 0,
      [columns.IS_ACTIVATED]: false,
      [columns.IS_BLOCKED]: false,
    };

    if (user[columns.EMAIL]) {
        user[columns.EMAIL] = user[columns.EMAIL].toLowerCase();
    }
    return user;
}

export function formatLogInData(rawLogInData) {
    const logInData = {
        [columns.PASSWORD]: rawLogInData[columns.PASSWORD]
    };

    if (rawLogInData[columns.EMAIL]) {
        logInData[columns.EMAIL] = rawLogInData[columns.EMAIL];
    } else {
        logInData[columns.LOGIN] = rawLogInData[columns.LOGIN];
    }

    return logInData;
}
