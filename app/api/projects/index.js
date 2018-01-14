import express from 'express';

import { ROUTES } from '../../constants';
import * as post from './post';
import * as get from './get';

const router = express.Router();

router.post(ROUTES.PROJECTS.CREATE, post.createProject);
router.get(ROUTES.PROJECTS.GET_USERS_PROJECTS, get.getUserProjects);
router.get(ROUTES.PROJECTS.GET_ALL_UNPUBLISHED, get.getUnpublishedProjects);
router.get(ROUTES.PROJECTS.GET_BY_ID, get.getProjectById);

export default router;
