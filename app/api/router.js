import express from 'express';
import { ROUTES } from '../constants';

import auth from './auth';
import profile from './profile';
import projects from './projects';
import contributions from './contributions';

const router = express.Router();

router.use('/', auth);
router.use(ROUTES.PROFILE.BASE, profile);
router.use(ROUTES.PROJECTS.BASE, projects);
router.use(ROUTES.CONTRIBUTIONS.BASE, contributions);

export default router;
