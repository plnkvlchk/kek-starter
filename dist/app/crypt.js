'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTokenForUser = exports.verifyToken = exports.encryptPassword = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var encryptPassword = exports.encryptPassword = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(password, key) {
        var salt, encryptedPassword;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.t0 = key;

                        if (_context.t0) {
                            _context.next = 5;
                            break;
                        }

                        _context.next = 4;
                        return _bcrypt2.default.genSalt(SALT_ROUNDS);

                    case 4:
                        _context.t0 = _context.sent;

                    case 5:
                        salt = _context.t0;
                        _context.next = 8;
                        return _bcrypt2.default.hash(password, salt);

                    case 8:
                        encryptedPassword = _context.sent;
                        return _context.abrupt('return', { encryptedPassword: encryptedPassword, salt: salt });

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function encryptPassword(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var verifyToken = exports.verifyToken = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(token) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return _jsonwebtoken2.default.verify(token, JWT_SECRET);

                    case 2:
                        return _context2.abrupt('return', _context2.sent);

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function verifyToken(_x3) {
        return _ref2.apply(this, arguments);
    };
}();

var getTokenForUser = exports.getTokenForUser = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(user) {
        var data;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        data = {};

                        data.email = user.email;
                        data.id = user.id;

                        _context3.next = 5;
                        return _jsonwebtoken2.default.sign(data, JWT_SECRET);

                    case 5:
                        return _context3.abrupt('return', _context3.sent);

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function getTokenForUser(_x4) {
        return _ref3.apply(this, arguments);
    };
}();

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var SALT_ROUNDS = 10;
var JWT_SECRET = 'secret';