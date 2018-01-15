import express from 'express';

import { ROUTES } from '../../constants';
import * as post from './post';
import * as get from './get';
import * as put from './put';
import * as remove from './delete';

const router = express.Router();

router.post(ROUTES.PROJECTS.CREATE, post.createProject);

router.put(ROUTES.PROJECTS.PUBLISH, put.publishProjects);
router.put(ROUTES.PROJECTS.UPDATE, put.updateProject);

router.get(ROUTES.PROJECTS.GET_USERS_PROJECTS, get.getUserProjects);
router.get(ROUTES.PROJECTS.GET_ALL_UNPUBLISHED, get.getUnpublishedProjects);
router.get(ROUTES.PROJECTS.GET_POPULAR, get.getMostPopularProjects);
router.get(ROUTES.PROJECTS.GET_BY_ID, get.getProjectById);
router.get(ROUTES.PROJECTS.GET_BY_CATEGORY, get.getProjectsOfCategory);

router.delete(ROUTES.PROJECTS.DELETE, remove.deleteProject);

export default router;
