import { Hono } from 'hono';
import * as userController from '../controllers/user.controller.js';

const userRoutes = new Hono();

userRoutes.post('/signup', userController.handleSignup);
userRoutes.post('/login', userController.handleLogin);
userRoutes.delete('/delete/:username', userController.handleDeleteAccount);
userRoutes.get('/username/:username', userController.getUsername);
userRoutes.get('/inventory/:username', userController.getUserInventory);

export default userRoutes ;