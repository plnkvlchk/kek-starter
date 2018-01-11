'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _routes = require('../../constants/routes');

var _get = require('./get');

var get = _interopRequireWildcard(_get);

var _post = require('./post');

var post = _interopRequireWildcard(_post);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = (0, _express.Router)();

router.get(_routes.ROUTES.FACTORIES.GET_ALL, get.getAllFactories);
router.post(_routes.ROUTES.FACTORIES.ADD, post.addNewFactory);

exports.default = router;