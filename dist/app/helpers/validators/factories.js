'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidFactory = isValidFactory;

var _tables = require('../../constants/tables');

var _errorMessages = require('../../constants/error-messages');

var _lodash = require('lodash');

var columns = _tables.TABLES.FACTORIES.COLUMNS;

function isValidFactory(factory) {
    var result = {};

    if (!(0, _lodash.isObject)(factory)) {
        return {
            error: _errorMessages.VALIDATION_MESSAGES.notAnObject
        };
    }

    if ((0, _lodash.isUndefined)(factory[columns.NAME])) {
        result[columns.NAME] = _errorMessages.VALIDATION_MESSAGES.notPassed;
    } else if (!(0, _lodash.isString)(factory[columns.NAME])) {
        result[columns.NAME] = _errorMessages.VALIDATION_MESSAGES.notAString;
    } else if ((0, _lodash.isEmpty)(factory[columns.NAME])) {
        result[columns.NAME] = _errorMessages.VALIDATION_MESSAGES.empty;
    }

    return (0, _lodash.isEmpty)(result) ? null : result;
}