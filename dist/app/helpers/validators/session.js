'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidLogInData = isValidLogInData;

var _tables = require('../../constants/tables');

var _index = require('./index');

var _lodash = require('lodash');

var columns = _tables.TABLES.USERS.COLUMNS;

var MESSAGES = {
    notPassed: 'Value is not passed.',
    notValid: 'Invalid value is passed.'
};

function isValidLogInData(logInData) {
    var result = {};

    if (!logInData[columns.EMAIL]) {
        result[columns.EMAIL] = MESSAGES.notPassed;
    } else if (!(0, _index.isValidEmail)(logInData[columns.EMAIL])) {
        result[columns.EMAIL] = MESSAGES.notValid;
    }

    if (!logInData[columns.PASSWORD]) {
        result[columns.PASSWORD] = MESSAGES.notPassed;
    } else if (!(0, _lodash.isString)(logInData[columns.PASSWORD])) {
        result[columns.PASSWORD] = MESSAGES.notValid;
    }

    return (0, _lodash.isEmpty)(result) ? null : result;
}