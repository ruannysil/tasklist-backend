import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/userController';
import SessionContoller from './app/controllers/SessionContoller';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionContoller.store);

//todas as rotas a baixa de middleware precisa esta autenticadas
routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
