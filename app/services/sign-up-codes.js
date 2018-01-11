import { oneOrNone } from '../db/index';
import {
    getSelectSignUpCodeQuery,
    getDeleteSignUpCodeByIdQuery,
    getInsertSignUpCodeQuery,
} from '../sql-queries/sign-up-codes';

export async function getSignUpCode(code) {
    return oneOrNone(
        getSelectSignUpCodeQuery(code),
    );
}

export async function deleteSignUpCode(id) {
    return oneOrNone(
        getDeleteSignUpCodeByIdQuery(id),
    );
}

export async function insertSignUpCode(signUpCode) {
    return oneOrNone(
        getInsertSignUpCodeQuery(signUpCode),
    );
}
