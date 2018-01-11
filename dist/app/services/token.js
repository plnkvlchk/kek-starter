'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extractIdFromToken = exports.verifyJWToken = exports.decodeJWToken = exports.getJWToken = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var getJWToken = exports.getJWToken = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
        var expiresIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : expirationPeriod;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _jsonwebtoken2.default.sign(data, JWTSecret, { expiresIn: expiresIn });

                    case 2:
                        return _context.abrupt('return', _context.sent);

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getJWToken(_x) {
        return _ref.apply(this, arguments);
    };
}();

var decodeJWToken = exports.decodeJWToken = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(token) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return _jsonwebtoken2.default.verify(token, JWTSecret);

                    case 2:
                        return _context2.abrupt('return', _context2.sent);

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function decodeJWToken(_x3) {
        return _ref2.apply(this, arguments);
    };
}();

var verifyJWToken = exports.verifyJWToken = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(token) {
        var result;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return _jsonwebtoken2.default.verify(token, JWTSecret);

                    case 3:
                        result = _context3.sent;

                        if (!result) {
                            _context3.next = 6;
                            break;
                        }

                        return _context3.abrupt('return', true);

                    case 6:
                        _context3.next = 11;
                        break;

                    case 8:
                        _context3.prev = 8;
                        _context3.t0 = _context3['catch'](0);
                        return _context3.abrupt('return', false);

                    case 11:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 8]]);
    }));

    return function verifyJWToken(_x4) {
        return _ref3.apply(this, arguments);
    };
}();

var extractIdFromToken = exports.extractIdFromToken = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(token) {
        var decodedData;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return decodeJWToken(token);

                    case 2:
                        decodedData = _context4.sent;
                        return _context4.abrupt('return', decodedData.id);

                    case 4:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function extractIdFromToken(_x5) {
        return _ref4.apply(this, arguments);
    };
}();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var JWTSecret = 'f4vb8FJu9hE9XeasszY5awQU/E2OEZ';
var expirationPeriod = '30d';