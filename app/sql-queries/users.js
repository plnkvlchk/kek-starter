import squel from 'squel';
import { TABLES } from '../constants';

const table = TABLES.USERS;
const columns = table.COLUMNS;

const squelPostgres = squel.useFlavour('postgres');

export function getSelectUserByEmailQuery(email) {
    return squel.select()
        .from(table.NAME)
        .where(`${columns.EMAIL} = '${email}'`)
        .toString();
}

export function getSelectUserByLoginQuery(login) {
    return squel.select()
        .from(table.NAME)
        .where(`${columns.LOGIN} = '${login}'`)
        .toString();
}

export function getInsertUserQuery(user) {
    return squelPostgres.insert()
        .into(table.NAME)
        .setFields(user)
        .returning('*')
        .toString();
}

export function getDeleteUserByIdQuery(id) {
    return squelPostgres.delete()
        .from(table.NAME)
        .where(`id = '${id}'`)
        .returning('*')
        .toString();
}

export function getSelectUserByIdQuery(id) {
    return squel.select()
        .from(table.NAME)
        .where(`id = '${id}'`)
        .toString();
}

export function getUpdateUserByIdQuery(id, values) {
    return squelPostgres.update()
        .table(table.NAME)
        .setFields(values)
        .where(`id = '${id}'`)
        .returning('*')
        .toString();
}

export function getBlockUserQuery(id) {
    return squelPostgres.update()
        .table(table.NAME)
        .set(columns.IS_BLOCKED, true)
        .where(`id = '${id}'`)
        .returning('*')
        .toString();
}

export function getAddPassworAttemptQuery(id) {
    // return squelPostgres.update()
    //     .table(table.NAME)
    //     .set(columns.PASSWORD_ATTEMPTS, columns.PASSWORD_ATTEMPTS + 1)
    //     .where(`id = '${id}'`)
    //     .returning('*')
    //     .toString();
    return `UPDATE users SET password_attempts = password_attempts + 1 WHERE (id = '${id}') RETURNING *`;
}
