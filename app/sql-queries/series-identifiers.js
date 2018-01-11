import squel from 'squel';
import { TABLES } from '../constants/tables';

const squelPostgres = squel.useFlavour('postgres');

const table = TABLES.SERIES_IDENTIFIERS;
const columns = table.COLUMNS;

export function getSelectAllSeriesIdentifiersQuery() {
    return squel.select()
        .from(table.NAME)
        .toString();
}

export function getSelectSeriesIdentifierByNameAndFactoryIdQuery(name, factoryId) {
    return squel.select()
        .from(table.NAME)
        .where(`${columns.NAME} = '${name}'`)
        .where(`${columns.FACTORY_ID} = '${factoryId}'`)
        .toString();
}

export function getInsertSeriesIdentifierQuery(seriesIdentifier) {
    return squelPostgres.insert()
        .into(table.NAME)
        .setFields(seriesIdentifier)
        .returning('*')
        .toString();
}
