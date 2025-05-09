import { Hono } from 'hono';
import * as userController from '../controllers/user.controller.js';

const inventory = new Hono();

inventory.get('/keys', userController.getUserKeys);
inventory.get('/:username', userController.getUserInventory);

export default inventory;
