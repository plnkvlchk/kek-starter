import express from 'express';
import { ROUTES } from '../constants';

import auth from './auth';
import profile from './profile';
import projects from './projects';

const router = express.Router();

// router.use('/', auth);
router.use(ROUTES.PROFILE.BASE, profile);
router.use(ROUTES.PROJECTS.BASE, projects);

export default router;
