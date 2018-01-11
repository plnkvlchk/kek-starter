import squel from 'squel';
import { TABLES } from '../constants/tables';

const squelPostgres = squel.useFlavour('postgres');

const table = TABLES.FACTORIES;
const columns = table.COLUMNS;

export function getSelectAllFactoriesQuery() {
    return squel.select()
        .from(table.NAME)
        .toString();
}

export function getSelectFactoryByIdQuery(id) {
    return squel.select()
        .from(table.NAME)
        .where(`id = '${id}'`)
        .toString();
}

export function getSelectFactoryByNameQuery(name) {
    return squel.select()
        .from(table.NAME)
        .where(`${columns.NAME} = '${name}'`)
        .toString();
}

export function getInsertFactoriesQuery(factories) {
    return squelPostgres.insert()
        .into(table.NAME)
        .setFieldsRows(factories)
        .returning('*')
        .toString();
}
