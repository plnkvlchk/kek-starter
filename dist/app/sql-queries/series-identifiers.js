'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSelectAllSeriesIdentifiersQuery = getSelectAllSeriesIdentifiersQuery;
exports.getSelectSeriesIdentifierByNameAndFactoryIdQuery = getSelectSeriesIdentifierByNameAndFactoryIdQuery;
exports.getInsertSeriesIdentifierQuery = getInsertSeriesIdentifierQuery;

var _squel = require('squel');

var _squel2 = _interopRequireDefault(_squel);

var _tables = require('../constants/tables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var squelPostgres = _squel2.default.useFlavour('postgres');

var table = _tables.TABLES.SERIES_IDENTIFIERS;
var columns = table.COLUMNS;

function getSelectAllSeriesIdentifiersQuery() {
    return _squel2.default.select().from(table.NAME).toString();
}

function getSelectSeriesIdentifierByNameAndFactoryIdQuery(name, factoryId) {
    return _squel2.default.select().from(table.NAME).where(columns.NAME + ' = \'' + name + '\'').where(columns.FACTORY_ID + ' = \'' + factoryId + '\'').toString();
}

function getInsertSeriesIdentifierQuery(seriesIdentifier) {
    return squelPostgres.insert().into(table.NAME).setFields(seriesIdentifier).returning('*').toString();
}