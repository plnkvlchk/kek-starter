import { manyOrNone, oneOrNone } from '../db/index';
import {
    getInsertFactoriesQuery,
    getSelectAllFactoriesQuery,
    getSelectFactoryByIdQuery,
    getSelectFactoryByNameQuery
} from '../sql-queries/factories';

export async function getAllFactories() {
    return manyOrNone(
        getSelectAllFactoriesQuery(),
    );
}

export async function getFactoryByName(name) {
    return oneOrNone(
        getSelectFactoryByNameQuery(name),
    );
}

export async function addFactory(factory) {
    return oneOrNone(
        getInsertFactoriesQuery([ factory ]),
    );
}

export async function getFactoryById(id) {
    return await oneOrNone(
        getSelectFactoryByIdQuery(id)
    );
}
