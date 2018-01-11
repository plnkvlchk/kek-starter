'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSelectSignUpCodeQuery = getSelectSignUpCodeQuery;
exports.getDeleteSignUpCodeByIdQuery = getDeleteSignUpCodeByIdQuery;
exports.getInsertSignUpCodeQuery = getInsertSignUpCodeQuery;

var _squel = require('squel');

var _squel2 = _interopRequireDefault(_squel);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var squelPostgres = _squel2.default.useFlavour('postgres');

var table = _constants.TABLES.SIGN_UP_CODES;
var columns = table.COLUMNS;

function getSelectSignUpCodeQuery(code) {
    return _squel2.default.select().from(table.NAME).where(columns.CODE + '=\'' + code + '\'').toString();
}

function getDeleteSignUpCodeByIdQuery(id) {
    return squelPostgres.delete().from(table.NAME).where('id=\'' + id + '\'').returning('*').toString();
}

function getInsertSignUpCodeQuery(value) {
    return squelPostgres.insert().into(table.NAME).setFields(value).returning('*').toString();
}