'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDeleteUser = exports.addUser = exports.getUserByLogin = exports.getUserByEmail = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var getUserByEmail = exports.getUserByEmail = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(email) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt('return', (0, _db.oneOrNone)((0, _sqlQueries.getSelectUserByEmailQuery)(email)));

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getUserByEmail(_x) {
        return _ref.apply(this, arguments);
    };
}();

var getUserByLogin = exports.getUserByLogin = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(login) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt('return', (0, _db.oneOrNone)((0, _users.getSelectUserByLoginQuery)(login)));

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getUserByLogin(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var addUser = exports.addUser = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(user) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        return _context3.abrupt('return', (0, _db.oneOrNone)((0, _users.getInsertUserQuery)(user)));

                    case 1:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function addUser(_x3) {
        return _ref3.apply(this, arguments);
    };
}();

var getDeleteUser = exports.getDeleteUser = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        return _context4.abrupt('return', (0, _db.oneOrNone)((0, _users.getDeleteUserByIdQuery)(id)));

                    case 1:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function getDeleteUser(_x4) {
        return _ref4.apply(this, arguments);
    };
}();

exports.getUser = getUser;
exports.updateUser = updateUser;

var _sqlQueries = require('../sql-queries');

var _db = require('../db');

var _users = require('../sql-queries/users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getUser(id) {
    return (0, _db.oneOrNone)((0, _users.getSelectUserByIdQuery)(id));
}

function updateUser(id, data) {
    return (0, _db.one)((0, _users.getUpdateUserByIdQuery)(id, data));
}