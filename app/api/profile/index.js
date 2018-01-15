import express from 'express';

import { ROUTES } from '../../constants';
import * as post from './post';
import { activateProfile } from './activate';

const router = express.Router();

router.post(ROUTES.PROFILE.CREATE, post.createProfile);
router.post(ROUTES.PROFILE.LOG_IN, post.logIn);
router.get('/activate/:token', activateProfile);
// router.post(ROUTES.PROFILE.RESEND_CONFIRMATION, post.resendEmailConfirmation);
// router.post(ROUTES.PROFILE.PASSWORD_RESET, post.resetPassword);
// router.post(ROUTES.PROFILE.PASSWORD_UPDATE, post.updatePassword);
//
// router.post(ROUTES.PROFILE.ACTIVATE, activateProfile);

export default router;
