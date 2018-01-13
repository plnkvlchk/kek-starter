import { TABLES, ERROR_MESSAGES } from '../../constants';
import { isEmpty, isString, isObject, isFinite } from 'lodash';
import { isValidEmail } from './index';

const columns = TABLES.USERS.COLUMNS;

export function isValidUser(user) {
    const result = {};

    if(!isObject(user)) {
        return {
            error: ERROR_MESSAGES.VALIDATION.SHOULD_BE_OBJECT,
        };
    }

    if(!user[columns.EMAIL]) {
        result[columns.EMAIL] = ERROR_MESSAGES.VALIDATION.VALUE_NOT_PASSED;
    } else if(!isValidEmail(user[columns.EMAIL])) {
        result[columns.EMAIL] = ERROR_MESSAGES.VALIDATION.INVALID_EMAIL_FORMAT;
    }

    if(!user[columns.PASSWORD]) {
        result[columns.PASSWORD] = ERROR_MESSAGES.VALIDATION.INVALID_VALUE;
    } else if(!isString(user[columns.PASSWORD])) {
        result[columns.PASSWORD] = ERROR_MESSAGES.VALIDATION.SHOULD_BE_STRING;
    }

    if(!user[columns.LOGIN]) {
        result[columns.LOGIN] = ERROR_MESSAGES.VALIDATION.VALUE_NOT_PASSED;
    } else if(!isString(user[columns.LOGIN])) {
        result[columns.LOGIN] = ERROR_MESSAGES.VALIDATION.SHOULD_BE_STRING;
    }

    if(user[columns.COUNTRY]) {
        if(!isString(user[columns.COUNTRY])) {
            result[columns.COUNTRY] = ERROR_MESSAGES.VALIDATION.SHOULD_BE_STRING;
        }
    }

    if(user[columns.AGE]) {
        if(!isFinite(user[columns.AGE])) {
            result[columns.AGE] = ERROR_MESSAGES.VALIDATION.SHOULD_BE_NUMBER;
        }
    }

    return isEmpty(result) ? null : result;
}
