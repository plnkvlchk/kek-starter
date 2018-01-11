import { TABLES } from '../../constants/tables';
import { isValidEmail } from './index';
import { isEmpty, isString } from 'lodash';

const columns = TABLES.USERS.COLUMNS;

const MESSAGES = {
    notPassed: 'Value is not passed.',
    notValid: 'Invalid value is passed.',
};

export function isValidLogInData(logInData) {
    const result = {};

    if(!logInData[columns.EMAIL]) {
        result[columns.EMAIL] = MESSAGES.notPassed;
    } else if(!isValidEmail(logInData[columns.EMAIL])) {
        result[columns.EMAIL] = MESSAGES.notValid;
    }

    if(!logInData[columns.PASSWORD]) {
        result[columns.PASSWORD] = MESSAGES.notPassed;
    } else if(!isString(logInData[columns.PASSWORD])) {
        result[columns.PASSWORD] = MESSAGES.notValid;
    }

    return isEmpty(result) ? null : result;
}
