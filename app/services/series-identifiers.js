import {
    getInsertSeriesIdentifierQuery,
    getSelectAllSeriesIdentifiersQuery,
    getSelectSeriesIdentifierByNameAndFactoryIdQuery
} from '../sql-queries/series-identifiers';
import { manyOrNone, oneOrNone } from '../db/index';

export function getAllSeriesIdentifiers() {
    return manyOrNone(getSelectAllSeriesIdentifiersQuery());
}

export function getSeriesIdentifierByNameAndFactoryId(name, factoryId) {
    return oneOrNone(getSelectSeriesIdentifierByNameAndFactoryIdQuery(name, factoryId));
}

export function insertSeriesIdentifier(seriesIdentifier) {
    return oneOrNone(getInsertSeriesIdentifierQuery(seriesIdentifier));
}
