import express from 'express';
import { ROUTES } from '../constants';

import auth from './auth';
import factories from './projects';
import profile from './profile';
import session from './session';

const router = express.Router();

router.use('/', auth);
router.use(ROUTES.FACTORIES.BASE, factories);
router.use(ROUTES.PROFILE.BASE, profile);
router.use(ROUTES.SERIES_IDENTIFIERS.BASE, seriesIdentifiers);
router.use(ROUTES.SESSION.BASE, session);

export default router;
