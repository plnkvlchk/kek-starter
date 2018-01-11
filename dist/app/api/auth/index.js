'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _auth = require('./auth');

var router = (0, _express.Router)();

router.use('/*', _auth.isAuthorized);

exports.default = router;