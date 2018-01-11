'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAuthorized = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var isAuthorized = exports.isAuthorized = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var token, isTokenValid;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!_routes.ALLOWED_ROUTES.includes(req.baseUrl)) {
                            _context.next = 2;
                            break;
                        }

                        return _context.abrupt('return', req.next());

                    case 2:
                        token = req.headers['x-access-token'];

                        if (!token) {
                            _context.next = 17;
                            break;
                        }

                        isTokenValid = void 0;
                        _context.prev = 5;
                        _context.next = 8;
                        return (0, _crypt.verifyToken)(token);

                    case 8:
                        isTokenValid = _context.sent;
                        _context.next = 14;
                        break;

                    case 11:
                        _context.prev = 11;
                        _context.t0 = _context['catch'](5);
                        return _context.abrupt('return', res.status(401).send({ message: 'Bad token is passed.' }));

                    case 14:
                        if (!isTokenValid) {
                            _context.next = 16;
                            break;
                        }

                        return _context.abrupt('return', req.next());

                    case 16:
                        return _context.abrupt('return', res.status(401).send({ message: 'Bad token is passed.' }));

                    case 17:
                        return _context.abrupt('return', res.status(401).send({ message: 'Unauthorized user.' }));

                    case 18:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[5, 11]]);
    }));

    return function isAuthorized(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _routes = require('../../constants/routes');

var _crypt = require('../../crypt');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }