import {
    TABLES,
    ERROR_MESSAGES,
} from '../../constants';
import { isEmpty, isString } from 'lodash';
import { isValidEmail, isValidSignUpCode } from './index';

const columns = TABLES.USERS.COLUMNS;

export function isValidUser(user) {
    const result = {};

    if(!user[columns.EMAIL]) {
        result[columns.EMAIL] = ERROR_MESSAGES.VALUE_NOT_PASSED;
    } else if(!isValidEmail(user[columns.EMAIL])) {
        result[columns.EMAIL] = ERROR_MESSAGES.NOT_VALID;
    }

    if(!user[columns.PASSWORD]) {
        result[columns.PASSWORD] = ERROR_MESSAGES.VALUE_NOT_PASSED;
    } else if(!isString(user[columns.PASSWORD])) {
        result[columns.PASSWORD] = ERROR_MESSAGES.SHOULD_BE_STRING;
    }

    if(!user[columns.LOGIN]) {
        result[columns.LOGIN] = ERROR_MESSAGES.VALUE_NOT_PASSED;
    } else if(!isString(user[columns.LOGIN])) {
        result[columns.LOGIN] = ERROR_MESSAGES.SHOULD_BE_STRING;
    }

    return isEmpty(result) ? null : result;
}

export function isValidToken(code) {
    if(!isString(code)) {
        return ERROR_MESSAGES.SHOULD_BE_STRING;
    } else if (isEmpty(code)){
        return ERROR_MESSAGES.VALUE_NOT_PASSED;
    }
    return null;
}
