import express from 'express';

import { ROUTES } from '../../constants';
import * as post from './post';

const router = express.Router();

router.post('/', post.createProject);

export default router;
