'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logIn = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var logIn = exports.logIn = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var columns, logInData, logInDataValidationInfo, user, wrongProfile, _ref2, encryptedPassword, wrongPassword, token;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        columns = _tables.TABLES.USERS.COLUMNS;
                        logInData = req.body;
                        logInDataValidationInfo = (0, _session.isValidLogInData)(logInData);

                        if (!logInDataValidationInfo) {
                            _context.next = 6;
                            break;
                        }

                        return _context.abrupt('return', (0, _index.reject)(res, { logInDataValidationInfo: logInDataValidationInfo }, MESSAGES.invalidData));

                    case 6:
                        _context.next = 8;
                        return (0, _users.getUserByEmail)(logInData[columns.EMAIL]);

                    case 8:
                        user = _context.sent;

                        if (user) {
                            _context.next = 12;
                            break;
                        }

                        wrongProfile = _defineProperty({}, columns.EMAIL, logInData[columns.EMAIL]);
                        return _context.abrupt('return', (0, _index.reject)(res, wrongProfile, MESSAGES.profileNotExist));

                    case 12:
                        _context.next = 14;
                        return (0, _crypt.encryptPassword)(logInData[columns.PASSWORD], user[columns.KEY]);

                    case 14:
                        _ref2 = _context.sent;
                        encryptedPassword = _ref2.encryptedPassword;

                        if (user[columns.PASSWORD] === encryptedPassword) {
                            _context.next = 19;
                            break;
                        }

                        wrongPassword = _defineProperty({}, columns.PASSWORD, logInData[columns.PASSWORD]);
                        return _context.abrupt('return', (0, _index.reject)(res, wrongPassword, MESSAGES.wrongPassword));

                    case 19:
                        _context.next = 21;
                        return (0, _crypt.getTokenForUser)(user);

                    case 21:
                        token = _context.sent;
                        return _context.abrupt('return', (0, _index.success)(res, { token: token }));

                    case 25:
                        _context.prev = 25;
                        _context.t0 = _context['catch'](0);
                        return _context.abrupt('return', (0, _index.reject)(res, { error: _context.t0 }));

                    case 28:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 25]]);
    }));

    return function logIn(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _tables = require('../../constants/tables');

var _index = require('../index');

var _users = require('../../services/users');

var _crypt = require('../../crypt');

var _session = require('../../helpers/validators/session');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var MESSAGES = {};