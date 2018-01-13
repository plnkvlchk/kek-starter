import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

// dotenv.config();

const pgp = pgPromise();
const dbUrl = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const db = pgp(dbUrl);

export function many(query) {
    return db.many(query);
}

export function one(query) {
    return db.one(query);
}

export function none(query) {
    return db.none(query);
}

export function oneOrNone(query) {
    return db.oneOrNone(query);
}

export function manyOrNone(query) {
    return db.manyOrNone(query);
}
