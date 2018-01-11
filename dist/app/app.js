'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('view engine', 'ejs');

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

app.use('/', _api2.default);

app.use(function (err, req, res, next) {
    if (err) {
        console.error(err.name + ': ' + err.message);
        res.status(500).send(err.message);
    } else {
        next(req, res);
    }
});

exports.default = app;