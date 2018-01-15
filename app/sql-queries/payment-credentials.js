import squel from 'squel';
import { TABLES } from '../constants';

const squelPostgres = squel.useFlavour('postgres');

const table = TABLES.PAYMENT_CREDENTIALS;
const columns = table.COLUMNS;

export function getInsertPaymentCredentialsQuery(values) {
    return squelPostgres.insert()
        .into(table.NAME)
        .setFields(values)
        .returning('*')
        .toString();
}
