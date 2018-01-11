import { Router } from 'express';
import { isAuthorized } from './auth';

const router = Router();

router.use('/*', isAuthorized);

export default router;
