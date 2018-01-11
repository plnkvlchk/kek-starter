'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _constants = require('../constants');

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _projects = require('./projects');

var _projects2 = _interopRequireDefault(_projects);

var _profile = require('./profile');

var _profile2 = _interopRequireDefault(_profile);

var _session = require('./session');

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/', _auth2.default);
router.use(_constants.ROUTES.FACTORIES.BASE, _projects2.default);
router.use(_constants.ROUTES.PROFILE.BASE, _profile2.default);
router.use(_constants.ROUTES.SERIES_IDENTIFIERS.BASE, seriesIdentifiers);
router.use(_constants.ROUTES.SESSION.BASE, _session2.default);

exports.default = router;