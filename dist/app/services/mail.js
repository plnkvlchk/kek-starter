'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendEmail = exports.initMailService = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var transporter = void 0;

var initMailService = exports.initMailService = function initMailService() {
    return new Promise(function (res, rej) {
        _nodemailer2.default.createTestAccount(function (err) {
            if (err) {
                return rej(err);
            }

            transporter = _nodemailer2.default.createTransport({
                host: _constants.EMAIL.HOST,
                port: _constants.EMAIL.PORT,
                secure: true,
                auth: {
                    user: _constants.EMAIL.ADDRESS,
                    pass: _constants.EMAIL.PASSWORD
                }
            });
            console.info('init complete');
            res();
        });
    });
};

var sendEmail = exports.sendEmail = function sendEmail(to, subject, html) {
    return new Promise(function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(res, rej) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (transporter) {
                                _context.next = 3;
                                break;
                            }

                            _context.next = 3;
                            return initMailService();

                        case 3:

                            transporter.sendMail({
                                from: _constants.EMAIL.AUTHOR,
                                to: to,
                                subject: subject,
                                html: html
                            }, function (error) {
                                if (error) {
                                    return rej(error);
                                }
                                res();
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }());
};