import { Hono } from 'hono';
import * as userController from '../controllers/user.controller.js';
import * as itemController from '../controllers/item.controller.js';

const inventory = new Hono();

inventory.get('/items', itemController.getAllBaseItems);
inventory.get('/:username/keys', userController.getUserKeys);
inventory.get('/:username', userController.getUserInventory);
inventory.get('/items/rarity/:rarity', itemController.getItemsByRarity);


export default inventory;
