'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSelectAllFactoriesQuery = getSelectAllFactoriesQuery;
exports.getSelectFactoryByIdQuery = getSelectFactoryByIdQuery;
exports.getSelectFactoryByNameQuery = getSelectFactoryByNameQuery;
exports.getInsertFactoriesQuery = getInsertFactoriesQuery;

var _squel = require('squel');

var _squel2 = _interopRequireDefault(_squel);

var _tables = require('../constants/tables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var squelPostgres = _squel2.default.useFlavour('postgres');

var table = _tables.TABLES.FACTORIES;
var columns = table.COLUMNS;

function getSelectAllFactoriesQuery() {
    return _squel2.default.select().from(table.NAME).toString();
}

function getSelectFactoryByIdQuery(id) {
    return _squel2.default.select().from(table.NAME).where('id = \'' + id + '\'').toString();
}

function getSelectFactoryByNameQuery(name) {
    return _squel2.default.select().from(table.NAME).where(columns.NAME + ' = \'' + name + '\'').toString();
}

function getInsertFactoriesQuery(factories) {
    return squelPostgres.insert().into(table.NAME).setFieldsRows(factories).returning('*').toString();
}