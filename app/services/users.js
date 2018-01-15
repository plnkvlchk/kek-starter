import { getSelectUserByEmailQuery } from '../sql-queries';
import { oneOrNone, one } from '../db';
import {
    getDeleteUserByIdQuery,
    getInsertUserQuery,
    getSelectUserByIdQuery,
    getUpdateUserByIdQuery,
    getSelectUserByLoginQuery,
    getBlockUserQuery,
    getAddPassworAttemptQuery,
} from '../sql-queries/users';

export async function getUserByEmail(email) {
    return oneOrNone(
        getSelectUserByEmailQuery(email),
    );
}

export async function getUserByLogin(login) {
    return oneOrNone(
        getSelectUserByLoginQuery(login)
    )
}

export async function addUser(user) {
    return oneOrNone(
        getInsertUserQuery(user),
    );
}

export async function getDeleteUser(id) {
    return oneOrNone(
        getDeleteUserByIdQuery(id),
    );
}

export function getUser(id) {
    return oneOrNone(
        getSelectUserByIdQuery(id),
    );
}

export function updateUser(id, data) {
    return oneOrNone(
        getUpdateUserByIdQuery(id, data),
    );
}

export function blockUser(id) {
    return oneOrNone(getBlockUserQuery(id));
}

export function addPasswordAttempt(id) {
    console.log(getAddPassworAttemptQuery(id));
    return oneOrNone(getAddPassworAttemptQuery(id));
}
