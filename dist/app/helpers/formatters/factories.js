'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatFactoryForInsertion = formatFactoryForInsertion;

var _tables = require('../../constants/tables');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var columns = _tables.TABLES.FACTORIES.COLUMNS;

function formatFactoryForInsertion(rawFactory) {
    return _defineProperty({}, columns.NAME, rawFactory[columns.NAME]);
}