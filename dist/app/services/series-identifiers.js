'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAllSeriesIdentifiers = getAllSeriesIdentifiers;
exports.getSeriesIdentifierByNameAndFactoryId = getSeriesIdentifierByNameAndFactoryId;
exports.insertSeriesIdentifier = insertSeriesIdentifier;

var _seriesIdentifiers = require('../sql-queries/series-identifiers');

var _index = require('../db/index');

function getAllSeriesIdentifiers() {
    return (0, _index.manyOrNone)((0, _seriesIdentifiers.getSelectAllSeriesIdentifiersQuery)());
}

function getSeriesIdentifierByNameAndFactoryId(name, factoryId) {
    return (0, _index.oneOrNone)((0, _seriesIdentifiers.getSelectSeriesIdentifierByNameAndFactoryIdQuery)(name, factoryId));
}

function insertSeriesIdentifier(seriesIdentifier) {
    return (0, _index.oneOrNone)((0, _seriesIdentifiers.getInsertSeriesIdentifierQuery)(seriesIdentifier));
}