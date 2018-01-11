'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatSeriesIdentifierForInsertion = formatSeriesIdentifierForInsertion;

var _tables = require('../../constants/tables');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var columns = _tables.TABLES.SERIES_IDENTIFIERS.COLUMNS;

function formatSeriesIdentifierForInsertion(rawSeriesIdentifier) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, columns.NAME, rawSeriesIdentifier[columns.NAME]), _defineProperty(_ref, columns.FACTORY_ID, rawSeriesIdentifier[columns.FACTORY_ID]), _ref;
}