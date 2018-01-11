'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.activateProfile = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var activateProfile = exports.activateProfile = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var token, codeValidationInfo, verifyToken, userId, user, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        token = req.body.token;
                        codeValidationInfo = (0, _users.isValidToken)(token);

                        if (!codeValidationInfo) {
                            _context.next = 5;
                            break;
                        }

                        return _context.abrupt('return', (0, _index.reject)(res, codeValidationInfo));

                    case 5:
                        _context.next = 7;
                        return (0, _services.verifyJWToken)(token);

                    case 7:
                        verifyToken = _context.sent;

                        if (verifyToken) {
                            _context.next = 10;
                            break;
                        }

                        return _context.abrupt('return', (0, _index.reject)(res, _constants.ERROR_MESSAGES.EXPIRED_CODE));

                    case 10:
                        _context.next = 12;
                        return (0, _services.extractIdFromToken)(token);

                    case 12:
                        userId = _context.sent;
                        _context.next = 15;
                        return (0, _services.getUser)(userId);

                    case 15:
                        user = _context.sent;

                        if (user) {
                            _context.next = 20;
                            break;
                        }

                        return _context.abrupt('return', (0, _index.reject)(res, _constants.ERROR_MESSAGES.USER_NOT_EXIST));

                    case 20:
                        if (!user[_constants.TABLES.USERS.COLUMNS.IS_ACTIVATED]) {
                            _context.next = 22;
                            break;
                        }

                        return _context.abrupt('return', (0, _index.reject)(res, _constants.ERROR_MESSAGES.USER_ALREADY_ACTIVATED));

                    case 22:
                        _context.next = 24;
                        return (0, _services.updateUser)(userId, _defineProperty({}, _constants.TABLES.USERS.COLUMNS.IS_ACTIVATED, true));

                    case 24:
                        result = _context.sent;

                        if (result) {
                            _context.next = 27;
                            break;
                        }

                        return _context.abrupt('return', (0, _index.reject)(res, _constants.ERROR_MESSAGES.ACTIVATION_ERROR));

                    case 27:
                        return _context.abrupt('return', (0, _index.success)(res));

                    case 30:
                        _context.prev = 30;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0);
                        return _context.abrupt('return', (0, _index.reject)(res, _constants.ERROR_MESSAGES.ACTIVATION_ERROR));

                    case 34:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 30]]);
    }));

    return function activateProfile(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _services = require('../../services');

var _index = require('../index');

var _users = require('../../helpers/validators/users');

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }