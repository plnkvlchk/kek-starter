'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.insertSignUpCode = exports.deleteSignUpCode = exports.getSignUpCode = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var getSignUpCode = exports.getSignUpCode = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(code) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt('return', (0, _index.oneOrNone)((0, _signUpCodes.getSelectSignUpCodeQuery)(code)));

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getSignUpCode(_x) {
        return _ref.apply(this, arguments);
    };
}();

var deleteSignUpCode = exports.deleteSignUpCode = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt('return', (0, _index.oneOrNone)((0, _signUpCodes.getDeleteSignUpCodeByIdQuery)(id)));

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function deleteSignUpCode(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var insertSignUpCode = exports.insertSignUpCode = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(signUpCode) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        return _context3.abrupt('return', (0, _index.oneOrNone)((0, _signUpCodes.getInsertSignUpCodeQuery)(signUpCode)));

                    case 1:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function insertSignUpCode(_x3) {
        return _ref3.apply(this, arguments);
    };
}();

var _index = require('../db/index');

var _signUpCodes = require('../sql-queries/sign-up-codes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }