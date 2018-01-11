'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatUserForInsertion = formatUserForInsertion;

var _constants = require('../../constants');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var columns = _constants.TABLES.USERS.COLUMNS;

function formatUserForInsertion(rawUser) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, columns.LOGIN, rawUser[columns.LOGIN]), _defineProperty(_ref, columns.COUNTRY, rawUser[columns.COUNTRY]), _defineProperty(_ref, columns.EMAIL, rawUser[columns.EMAIL].toLowerCase()), _defineProperty(_ref, columns.PASSWORD_ATTEMPTS, 0), _defineProperty(_ref, columns.IS_ACTIVATED, false), _defineProperty(_ref, columns.IS_BLOCKED, false), _ref;
}