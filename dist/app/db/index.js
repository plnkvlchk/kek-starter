'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.many = many;
exports.one = one;
exports.none = none;
exports.oneOrNone = oneOrNone;
exports.manyOrNone = manyOrNone;

var _pgPromise = require('pg-promise');

var _pgPromise2 = _interopRequireDefault(_pgPromise);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var pgp = (0, _pgPromise2.default)();
var dbUrl = 'postgres://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME;
var db = pgp(dbUrl);

function many(query) {
    return db.many(query);
}

function one(query) {
    return db.one(query);
}

function none(query) {
    return db.none(query);
}

function oneOrNone(query) {
    return db.oneOrNone(query);
}

function manyOrNone(query) {
    return db.manyOrNone(query);
}