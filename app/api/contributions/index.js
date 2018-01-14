import express from 'express';

import { ROUTES } from '../../constants';
import * as post from './post';
import * as get from './get';

const router = express.Router();

router.post(ROUTES.CONTRIBUTIONS.CONTRIBUTE, post.donate);

router.get(ROUTES.CONTRIBUTIONS.GET_ALL_CONTRIBUTIONS, get.getAllContributions);
router.get(ROUTES.CONTRIBUTIONS.GET_OWN_CONTRIBUTIONS, get.getUserContributions);
router.get(ROUTES.CONTRIBUTIONS.GET_PROJECTS_CONTRIBUTIONS, get.getProjectContributions);

export default router;

