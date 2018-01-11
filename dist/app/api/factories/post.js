'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addNewFactory = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var addNewFactory = exports.addNewFactory = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var factoryData, factoryValidationInfo, isExist, existingFactory, factory;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        factoryData = req.body;
                        factoryValidationInfo = (0, _factories.isValidFactory)(factoryData);

                        if (!factoryValidationInfo) {
                            _context.next = 5;
                            break;
                        }

                        return _context.abrupt('return', (0, _index.reject)(res, { factoryValidationInfo: factoryValidationInfo }, _constants.ERROR_MESSAGES.INVALID_FACTORY_DATA));

                    case 5:
                        _context.next = 7;
                        return (0, _services.getFactoryByName)(factoryData[_constants.TABLES.FACTORIES.COLUMNS.NAME]);

                    case 7:
                        isExist = _context.sent;

                        if (!isExist) {
                            _context.next = 11;
                            break;
                        }

                        existingFactory = _defineProperty({}, _constants.TABLES.FACTORIES.COLUMNS.NAME, factoryData[_constants.TABLES.FACTORIES.COLUMNS.NAME]);
                        return _context.abrupt('return', (0, _index.reject)(res, existingFactory, _constants.ERROR_MESSAGES.FACTORY_ALREADY_EXIST));

                    case 11:
                        _context.next = 13;
                        return (0, _services.addFactory)((0, _factories2.formatFactoryForInsertion)(factoryData));

                    case 13:
                        factory = _context.sent;
                        return _context.abrupt('return', (0, _index.success)(res, { factory: factory }));

                    case 17:
                        _context.prev = 17;
                        _context.t0 = _context['catch'](0);
                        return _context.abrupt('return', (0, _index.reject)(res, { error: _context.t0 }));

                    case 20:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 17]]);
    }));

    return function addNewFactory(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _services = require('../../services');

var _constants = require('../../constants');

var _index = require('../index');

var _factories = require('../../helpers/validators/factories');

var _factories2 = require('../../helpers/formatters/factories');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }