'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _factories = require('./factories');

Object.keys(_factories).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _factories[key];
        }
    });
});

var _seriesIdentifiers = require('./series-identifiers');

Object.keys(_seriesIdentifiers).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _seriesIdentifiers[key];
        }
    });
});

var _session = require('./session');

Object.keys(_session).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _session[key];
        }
    });
});

var _users = require('./users');

Object.keys(_users).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _users[key];
        }
    });
});
exports.isValidUUID = isValidUUID;
exports.isValidEmail = isValidEmail;
exports.isValidSignUpCode = isValidSignUpCode;

var _lodash = require('lodash');

function isValidUUID(uuid) {
    return (0, _lodash.isString)(uuid) && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid);
}

function isValidEmail(email) {
    return (0, _lodash.isString)(email) && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isValidSignUpCode(code) {
    return (0, _lodash.isString)(code) && /[\w]{40}$/.test(code);
}