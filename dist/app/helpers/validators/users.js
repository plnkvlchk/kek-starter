'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidUser = isValidUser;
exports.isValidToken = isValidToken;

var _constants = require('../../constants');

var _lodash = require('lodash');

var _index = require('./index');

var columns = _constants.TABLES.USERS.COLUMNS;

function isValidUser(user) {
    var result = {};

    if (!user[columns.EMAIL]) {
        result[columns.EMAIL] = _constants.ERROR_MESSAGES.VALUE_NOT_PASSED;
    } else if (!(0, _index.isValidEmail)(user[columns.EMAIL])) {
        result[columns.EMAIL] = _constants.ERROR_MESSAGES.NOT_VALID;
    }

    if (!user[columns.PASSWORD]) {
        result[columns.PASSWORD] = _constants.ERROR_MESSAGES.VALUE_NOT_PASSED;
    } else if (!(0, _lodash.isString)(user[columns.PASSWORD])) {
        result[columns.PASSWORD] = _constants.ERROR_MESSAGES.SHOULD_BE_STRING;
    }

    if (!user[columns.LOGIN]) {
        result[columns.LOGIN] = _constants.ERROR_MESSAGES.VALUE_NOT_PASSED;
    } else if (!(0, _lodash.isString)(user[columns.LOGIN])) {
        result[columns.LOGIN] = _constants.ERROR_MESSAGES.SHOULD_BE_STRING;
    }

    return (0, _lodash.isEmpty)(result) ? null : result;
}

function isValidToken(code) {
    if (!(0, _lodash.isString)(code)) {
        return _constants.ERROR_MESSAGES.SHOULD_BE_STRING;
    } else if ((0, _lodash.isEmpty)(code)) {
        return _constants.ERROR_MESSAGES.VALUE_NOT_PASSED;
    }
    return null;
}