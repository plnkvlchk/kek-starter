import _ from 'lodash';
import { isValidUUID, isValidCardNumber } from './';
import { ERROR_MESSAGES, TABLES } from '../../constants';

export function isAndroidDonationValid(donation) {
    const result = {};

    if (!donation['pledge']) {
        result['pledge'] = ERROR_MESSAGES.VALIDATION.VALUE_NOT_PASSED;
    } else if (!parseFloat(donation['pledge'])) {
        result['pledge'] = ERROR_MESSAGES.VALIDATION.SHOULD_BE_NUMBER;
    }

    if (!donation['project_id']) {
        result['project_id'] = ERROR_MESSAGES.VALIDATION.VALUE_NOT_PASSED;
    } else if (!isValidUUID(donation['project_id'])) {
        result['project_id'] = ERROR_MESSAGES.VALIDATION.INVALID_ID_FORMAT;
    }

    if (!donation['month']) {
        result['month'] = ERROR_MESSAGES.VALIDATION.VALUE_NOT_PASSED;
    }

    if (!donation['year']) {
        result['year'] = ERROR_MESSAGES.VALIDATION.VALUE_NOT_PASSED;
    }

    if (!donation['code']) {
        result['code'] = ERROR_MESSAGES.VALIDATION.VALUE_NOT_PASSED;
    }

    if(!donation['number']) {
        result['number'] = ERROR_MESSAGES.VALIDATION.VALUE_NOT_PASSED;
    } else if (!isValidCardNumber(donation['number'])) {
        result['number'] = ERROR_MESSAGES.VALIDATION.INVALID_CARD_NUMBER;
    }

    return _.isEmpty(result) ? null : result;
}
