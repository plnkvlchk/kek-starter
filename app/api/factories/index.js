import { Router } from 'express';
import { ROUTES } from '../../constants/routes';
import * as get from './get';
import * as post from './post';

const router = Router();

router.get(ROUTES.FACTORIES.GET_ALL, get.getAllFactories);
router.post(ROUTES.FACTORIES.ADD, post.addNewFactory);

export default router;
