import { Hono } from 'hono';
import * as userController from '../controllers/user.controller.js';

const userRoutes = new Hono();

userRoutes.post('/signup', userController.handleSignup);
userRoutes.post('/login', userController.handleLogin);
userRoutes.delete('/account/:username', userController.handleDeleteAccount);
userRoutes.get('/name/:username', userController.getUsername);

export default userRoutes ;