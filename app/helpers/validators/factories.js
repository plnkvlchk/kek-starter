import { TABLES } from '../../constants/tables';
import { VALIDATION_MESSAGES } from '../../constants/error-messages';
import { isObject, isUndefined, isString, isEmpty } from 'lodash';

const columns = TABLES.FACTORIES.COLUMNS;

export function isValidFactory(factory) {
    const result = {};

    if(!isObject(factory)) {
        return {
            error: VALIDATION_MESSAGES.notAnObject,
        };
    }

    if(isUndefined(factory[columns.NAME])) {
        result[columns.NAME] = VALIDATION_MESSAGES.notPassed;
    } else if(!isString(factory[columns.NAME])) {
        result[columns.NAME] = VALIDATION_MESSAGES.notAString;
    } else if(isEmpty(factory[columns.NAME])) {
        result[columns.NAME] = VALIDATION_MESSAGES.empty;
    }

    return isEmpty(result) ? null : result;
}
