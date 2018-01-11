'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _constants = require('../../constants');

var _post = require('./post');

var post = _interopRequireWildcard(_post);

var _activate = require('./activate');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', post.createProfile);
router.post(_constants.ROUTES.PROFILE.RESEND_CONFIRMATION, post.resendEmailConfirmation);
router.post(_constants.ROUTES.PROFILE.PASSWORD_RESET, post.resetPassword);
router.post(_constants.ROUTES.PROFILE.PASSWORD_UPDATE, post.updatePassword);

router.post(_constants.ROUTES.PROFILE.ACTIVATE, _activate.activateProfile);

exports.default = router;