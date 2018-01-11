'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updatePassword = exports.resetPassword = exports.resendEmailConfirmation = exports.createProfile = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var createProfile = exports.createProfile = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var profileData, profileDataValidationInfo, userWithEmail, userWithLogin, _ref2, encryptedPassword, salt, user;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        profileData = (0, _formatters.formatUserForInsertion)(req.body.profileData);
                        profileDataValidationInfo = (0, _validators.isValidUser)(profileData);

                        if (!profileDataValidationInfo) {
                            _context.next = 5;
                            break;
                        }

                        return _context.abrupt('return', (0, _index.reject)(res, _constants.ERROR_MESSAGES.INVALID_PROFILE_DATA, profileDataValidationInfo));

                    case 5:
                        _context.next = 7;
                        return (0, _services.getUserByEmail)(profileData[_constants.TABLES.USERS.COLUMNS.EMAIL]);

                    case 7:
                        userWithEmail = _context.sent;

                        if (!userWithEmail) {
                            _context.next = 10;
                            break;
                        }

                        return _context.abrupt('return', (0, _index.reject)(res, _constants.ERROR_MESSAGES.EMAIL_ALREADY_USED, _defineProperty({}, _constants.TABLES.USERS.COLUMNS.EMAIL, profileData[_constants.TABLES.USERS.COLUMNS.EMAIL])));

                    case 10:
                        _context.next = 12;
                        return (0, _services.getUserByLogin)(profileData[_constants.TABLES.USERS.COLUMNS.LOGIN]);

                    case 12:
                        userWithLogin = _context.sent;

                        if (!userWithLogin) {
                            _context.next = 15;
                            break;
                        }

                        return _context.abrupt('return', (0, _index.reject)(res, _constants.ERROR_MESSAGES.LOGIN_ALREADY_USED, _defineProperty({}, _constants.TABLES.USERS.COLUMNS.LOGIN, profileData[_constants.TABLES.USERS.COLUMNS.LOGIN])));

                    case 15:
                        _context.next = 17;
                        return (0, _crypt.encryptPassword)(profileData[_constants.TABLES.USERS.COLUMNS.PASSWORD]);

                    case 17:
                        _ref2 = _context.sent;
                        encryptedPassword = _ref2.encryptedPassword;
                        salt = _ref2.salt;

                        profileData[_constants.TABLES.USERS.COLUMNS.PASSWORD] = encryptedPassword;
                        profileData[_constants.TABLES.USERS.COLUMNS.KEY] = salt;

                        _context.next = 24;
                        return (0, _services.addUser)(profileData);

                    case 24:
                        user = _context.sent;
                        return _context.abrupt('return', (0, _index.success)(res, { user: user }));

                    case 28:
                        _context.prev = 28;
                        _context.t0 = _context['catch'](0);
                        return _context.abrupt('return', (0, _index.reject)(res, _constants.ERROR_MESSAGES.INSERTION_FAILED, { error: _context.t0 }));

                    case 31:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 28]]);
    }));

    return function createProfile(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var resendEmailConfirmation = exports.resendEmailConfirmation = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var userId, userIdValidationInfo, error, user, _error2, invitation, link, header, filename, data, options;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        userId = req.body[_constants.TABLES.USERS.COLUMNS.ID];
                        userIdValidationInfo = (0, _validators.isValidUUID)(userId);

                        if (userIdValidationInfo) {
                            _context2.next = 6;
                            break;
                        }

                        error = _defineProperty({}, _constants.TABLES.USERS.COLUMNS.ID, _constants.ERROR_MESSAGES.NOT_VALID);
                        return _context2.abrupt('return', (0, _index.reject)(res, error));

                    case 6:
                        _context2.next = 8;
                        return (0, _services.getUser)(userId);

                    case 8:
                        user = _context2.sent;

                        if (user) {
                            _context2.next = 12;
                            break;
                        }

                        _error2 = _defineProperty({}, _constants.TABLES.USERS.COLUMNS.ID, _constants.ERROR_MESSAGES.USER_NOT_EXIST);
                        return _context2.abrupt('return', (0, _index.reject)(res, _error2));

                    case 12:
                        _context2.next = 14;
                        return (0, _services.getJWToken)({ id: user.id }, '1d');

                    case 14:
                        invitation = _context2.sent;
                        link = '' + _constants.ACTIVATION_LINK + invitation;
                        header = 'Email confirmation';
                        filename = _path2.default.resolve(__dirname, '../../templates/sign-up.ejs');
                        data = { link: link };
                        options = {};


                        _ejs2.default.renderFile(filename, data, options, function (error, template) {
                            if (!error) {
                                (0, _services.sendEmail)(user.email, header, template);
                            }
                        });

                        return _context2.abrupt('return', (0, _index.success)(res));

                    case 24:
                        _context2.prev = 24;
                        _context2.t0 = _context2['catch'](0);

                        console.error(_context2.t0);
                        return _context2.abrupt('return', (0, _index.reject)(res, _constants.ERROR_MESSAGES.RESEND_FAILED));

                    case 28:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 24]]);
    }));

    return function resendEmailConfirmation(_x3, _x4) {
        return _ref3.apply(this, arguments);
    };
}();

var resetPassword = exports.resetPassword = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var email, emailValidationInfo, error, user, _error5, invitation, link, header, filename, data, options;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        email = req.body[_constants.TABLES.USERS.COLUMNS.EMAIL];
                        emailValidationInfo = (0, _validators.isValidEmail)(email);

                        if (emailValidationInfo) {
                            _context3.next = 6;
                            break;
                        }

                        error = _defineProperty({}, _constants.TABLES.USERS.COLUMNS.EMAIL, _constants.ERROR_MESSAGES.NOT_VALID);
                        return _context3.abrupt('return', (0, _index.reject)(res, error));

                    case 6:
                        _context3.next = 8;
                        return (0, _services.getUserByEmail)(email);

                    case 8:
                        user = _context3.sent;

                        if (user) {
                            _context3.next = 12;
                            break;
                        }

                        _error5 = _defineProperty({}, _constants.TABLES.USERS.COLUMNS.EMAIL, _constants.ERROR_MESSAGES.USER_NOT_EXIST);
                        return _context3.abrupt('return', (0, _index.reject)(res, _error5));

                    case 12:
                        _context3.next = 14;
                        return (0, _services.getJWToken)({ id: user.id }, '1d');

                    case 14:
                        invitation = _context3.sent;
                        link = '' + _constants.RESET_PASSWORD_LINK + invitation;
                        header = 'Reset password';
                        filename = _path2.default.resolve(__dirname, '../../templates/reset-password.ejs');
                        data = { link: link };
                        options = {};


                        _ejs2.default.renderFile(filename, data, options, function (error, template) {
                            if (!error) {
                                (0, _services.sendEmail)(user.email, header, template);
                            }
                        });

                        return _context3.abrupt('return', (0, _index.success)(res));

                    case 24:
                        _context3.prev = 24;
                        _context3.t0 = _context3['catch'](0);

                        console.error(_context3.t0);
                        return _context3.abrupt('return', (0, _index.reject)(res, _constants.ERROR_MESSAGES.PASSWORD_RESET_FAILED));

                    case 28:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 24]]);
    }));

    return function resetPassword(_x5, _x6) {
        return _ref4.apply(this, arguments);
    };
}();

var updatePassword = exports.updatePassword = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var _updateUser, _req$body, password, token, tokenValidationInfo, error, verifyTokenInfo, _error7, userId, user, _ref6, encryptedPassword, salt, result;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _req$body = req.body, password = _req$body.password, token = _req$body.token;
                        tokenValidationInfo = (0, _validators.isValidToken)(token);

                        if (!tokenValidationInfo) {
                            _context4.next = 6;
                            break;
                        }

                        error = {
                            token: _constants.ERROR_MESSAGES.INVALID_TOKEN
                        };
                        return _context4.abrupt('return', (0, _index.reject)(res, error));

                    case 6:
                        _context4.next = 8;
                        return (0, _services.verifyJWToken)(token);

                    case 8:
                        verifyTokenInfo = _context4.sent;

                        if (verifyTokenInfo) {
                            _context4.next = 12;
                            break;
                        }

                        _error7 = {
                            token: _constants.ERROR_MESSAGES.INVALID_TOKEN
                        };
                        return _context4.abrupt('return', (0, _index.reject)(res, _error7));

                    case 12:
                        _context4.next = 14;
                        return (0, _services.extractIdFromToken)(token);

                    case 14:
                        userId = _context4.sent;
                        _context4.next = 17;
                        return (0, _services.getUser)(userId);

                    case 17:
                        user = _context4.sent;

                        if (user) {
                            _context4.next = 20;
                            break;
                        }

                        return _context4.abrupt('return', (0, _index.reject)(res, _constants.ERROR_MESSAGES.USER_NOT_EXIST));

                    case 20:
                        _context4.next = 22;
                        return (0, _crypt.encryptPassword)(password);

                    case 22:
                        _ref6 = _context4.sent;
                        encryptedPassword = _ref6.encryptedPassword;
                        salt = _ref6.salt;
                        _context4.next = 27;
                        return (0, _services.updateUser)(userId, (_updateUser = {}, _defineProperty(_updateUser, _constants.TABLES.USERS.COLUMNS.PASSWORD, encryptedPassword), _defineProperty(_updateUser, _constants.TABLES.USERS.COLUMNS.KEY, salt), _updateUser));

                    case 27:
                        result = _context4.sent;

                        if (result) {
                            _context4.next = 30;
                            break;
                        }

                        return _context4.abrupt('return', (0, _index.reject)(res, _constants.ERROR_MESSAGES.PASSWORD_UPDATE_ERROR));

                    case 30:
                        return _context4.abrupt('return', (0, _index.success)(res));

                    case 33:
                        _context4.prev = 33;
                        _context4.t0 = _context4['catch'](0);

                        console.error(_context4.t0);
                        return _context4.abrupt('return', (0, _index.reject)(res, _constants.ERROR_MESSAGES.PASSWORD_UPDATE_ERROR));

                    case 37:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[0, 33]]);
    }));

    return function updatePassword(_x7, _x8) {
        return _ref5.apply(this, arguments);
    };
}();

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _index = require('../index');

var _validators = require('../../helpers/validators');

var _formatters = require('../../helpers/formatters');

var _crypt = require('../../crypt');

var _services = require('../../services');

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }