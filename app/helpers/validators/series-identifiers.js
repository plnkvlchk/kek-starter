import { TABLES } from '../../constants/tables';
import { VALIDATION_MESSAGES } from '../../constants/messages';
import _ from 'lodash';
import { isValidUUID } from './index';

const columns = TABLES.SERIES_IDENTIFIERS.COLUMNS;

export function isValidSeriesIdentifier(seriesIdentifier) {
    const result = {};

    if(!_.isObject(seriesIdentifier)) {
        return {
            error: VALIDATION_MESSAGES.notAnObject
        };
    }

    if(_.isUndefined(seriesIdentifier[columns.NAME])) {
        result[columns.NAME] = VALIDATION_MESSAGES.notPassed;
    } else if(!_.isString(seriesIdentifier[columns.NAME])) {
        result[columns.NAME] = VALIDATION_MESSAGES.notAString;
    } else if(_.isEmpty(seriesIdentifier[columns.NAME])) {
        result[columns.NAME] = VALIDATION_MESSAGES.empty;
    }

    if(_.isUndefined(seriesIdentifier[columns.FACTORY_ID])) {
        result[columns.FACTORY_ID] = VALIDATION_MESSAGES.notPassed;
    } else if(!isValidUUID(seriesIdentifier[columns.FACTORY_ID])) {
        result[columns.FACTORY_ID] = VALIDATION_MESSAGES.invalidUUID;
    }

    return _.isEmpty(result) ? null : result;
}
