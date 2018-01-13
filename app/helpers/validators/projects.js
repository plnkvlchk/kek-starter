import { isValidURLsArray } from './';
import { isString, isFinite, isArray, isEmpty, values } from 'lodash';
import { TABLES, ERROR_MESSAGES, CATEGORIES } from '../../constants';

const columns = TABLES.PROJECTS.COLUMNS;

export function isValidProject(project) {
  const result = {};

  if(!isObject(project)) {
    return {
      error: ERROR_MESSAGES.VALIDATION.SHOULD_BE_OBJECT,
    };
  }

  if(!project[columns.NAME]) {
    result[columns.NAME] = ERROR_MESSAGES.VALIDATION.VALUE_NOT_PASSED;
  } else if(!isString(project[columns.NAME])) {
    result[columns.NAME] = ERROR_MESSAGES.VALIDATION.SHOULD_BE_STRING;
  }

  if(!project[columns.NEEDED_SUM]) {
    result[columns.NEEDED_SUM] = ERROR_MESSAGES.VALIDATION.VALUE_NOT_PASSED;
  } else if(!isFinite(project[columns.NEEDED_SUM])) {
    result[columns.NEEDED_SUM] = ERROR_MESSAGES.VALIDATION.SHOULD_BE_NUMBER;
  }

  if(!project[columns.MIN_SUM_TO_DONATE]) {
    result[columns.MIN_SUM_TO_DONATE] = ERROR_MESSAGES.VALIDATION.VALUE_NOT_PASSED;
  } else if(!isFinite(project[columns.MIN_SUM_TO_DONATE])) {
    result[columns.MIN_SUM_TO_DONATE] = ERROR_MESSAGES.VALIDATION.SHOULD_BE_NUMBER;
  }

  if(!project[columns.CATEGORY]) {
    result[columns.CATEGORY] = ERROR_MESSAGES.VALIDATION.VALUE_NOT_PASSED;
  } else if(!isString(project[columns.CATEGORY])) {
    result[columns.CATEGORY] = ERROR_MESSAGES.VALIDATION.SHOULD_BE_STRING;
  } else if(!values(CATEGORIES).includes(project[columns.CATEGORY])) {
    result[columns.CATEGORY] = ERROR_MESSAGES.VALIDATION.CATEGORY_NOT_EXISTS;
  }

  if(!project[columns.DESCRIPTION]) {
    result[columns.DESCRIPTION] = ERROR_MESSAGES.VALIDATION.VALUE_NOT_PASSED;
  } else if(!isString(project[columns.DESCRIPTION])) {
    result[columns.DESCRIPTION] = ERROR_MESSAGES.VALIDATION.SHOULD_BE_STRING;
  }

  if(project[columns.MEDIA_URLS]) {
    if(!isArray(project[columns.MEDIA_URLS])) {
      result[columns.MEDIA_URLS] = ERROR_MESSAGES.VALIDATION.SHOULD_BE_ARRAY;
    } else if(!isValidURLsArray(project[columns.MEDIA_URLS])) {
      result[columns.MEDIA_URLS] = ERROR_MESSAGES.VALIDATION.INVALID_URL_FORMAT;
    }
  }

  return isEmpty(result) ? null : result;
}
