'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.success = success;
exports.reject = reject;

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function success(res, data) {
    var result = {
        success: true,
        data: data
    };

    res.status(200).send(result);
}

function reject(res, error, data) {
    var result = {
        success: false,
        error: error
    };

    res.status(400).send(result);
}

exports.default = _router2.default;