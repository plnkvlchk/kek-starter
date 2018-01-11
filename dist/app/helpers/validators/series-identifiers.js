'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidSeriesIdentifier = isValidSeriesIdentifier;

var _tables = require('../../constants/tables');

var _messages = require('../../constants/messages');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var columns = _tables.TABLES.SERIES_IDENTIFIERS.COLUMNS;

function isValidSeriesIdentifier(seriesIdentifier) {
    var result = {};

    if (!_lodash2.default.isObject(seriesIdentifier)) {
        return {
            error: _messages.VALIDATION_MESSAGES.notAnObject
        };
    }

    if (_lodash2.default.isUndefined(seriesIdentifier[columns.NAME])) {
        result[columns.NAME] = _messages.VALIDATION_MESSAGES.notPassed;
    } else if (!_lodash2.default.isString(seriesIdentifier[columns.NAME])) {
        result[columns.NAME] = _messages.VALIDATION_MESSAGES.notAString;
    } else if (_lodash2.default.isEmpty(seriesIdentifier[columns.NAME])) {
        result[columns.NAME] = _messages.VALIDATION_MESSAGES.empty;
    }

    if (_lodash2.default.isUndefined(seriesIdentifier[columns.FACTORY_ID])) {
        result[columns.FACTORY_ID] = _messages.VALIDATION_MESSAGES.notPassed;
    } else if (!(0, _index.isValidUUID)(seriesIdentifier[columns.FACTORY_ID])) {
        result[columns.FACTORY_ID] = _messages.VALIDATION_MESSAGES.invalidUUID;
    }

    return _lodash2.default.isEmpty(result) ? null : result;
}