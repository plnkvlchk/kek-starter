'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSelectUserByEmailQuery = getSelectUserByEmailQuery;
exports.getSelectUserByLoginQuery = getSelectUserByLoginQuery;
exports.getInsertUserQuery = getInsertUserQuery;
exports.getDeleteUserByIdQuery = getDeleteUserByIdQuery;
exports.getSelectUserByIdQuery = getSelectUserByIdQuery;
exports.getUpdateUserByIdQuery = getUpdateUserByIdQuery;

var _squel = require('squel');

var _squel2 = _interopRequireDefault(_squel);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var table = _constants.TABLES.USERS;
var columns = table.COLUMNS;

var squelPostgres = _squel2.default.useFlavour('postgres');

function getSelectUserByEmailQuery(email) {
    return _squel2.default.select().from(table.NAME).where(columns.EMAIL + ' = \'' + email + '\'').toString();
}

function getSelectUserByLoginQuery(login) {
    return _squel2.default.select().from(table.NAME).where(columns.LOGIN + ' = \'' + login + '\'').toString();
}

function getInsertUserQuery(user) {
    return squelPostgres.insert().into(table.NAME).setFields(user).returning('*').toString();
}

function getDeleteUserByIdQuery(id) {
    return squelPostgres.delete().from(table.NAME).where('id = \'' + id + '\'').returning('*').toString();
}

function getSelectUserByIdQuery(id) {
    return _squel2.default.select().from(table.NAME).where('id = \'' + id + '\'').toString();
}

function getUpdateUserByIdQuery(id, values) {
    return squelPostgres.update().table(table.NAME).setFields(values).where('id = \'' + id + '\'').returning('*').toString();
}