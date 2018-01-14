import squel from 'squel';
import { TABLES } from '../constants';

const squelPostgres = squel.useFlavour('postgres');

const table = TABLES.CONTRIBUTIONS;
const columns = table.COLUMNS;

export function getInsertContributionQuery(values) {
    return squelPostgres.insert()
        .into(table.NAME)
        .setFields(values)
        .returning('*')
        .toString();
}

export function getSelectUserContributionsQuery(userId) {
    return squel.select()
        .from(table.NAME)
        .where(`${columns.USER_ID} = '${userId}'`)
        .toString();
}

export function getSelectProjectContributionsQuery(projectId) {
    return squel.select()
        .from(table.NAME)
        .where(`${columns.PROJECT_ID} = '${projectId}'`)
        .toString();
}

export function getSelectAllContributionsQuery() {
    return squel.select()
        .from(table.NAME)
        .toString();
}

