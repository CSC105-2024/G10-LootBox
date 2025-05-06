import { Hono } from 'hono';
import user from './user.routes.js';
import shop from './shop.routes.js';
import inventory from './inventory.routes.js';

const routes = new Hono();

routes.route('/user', user);
routes.route('/shop', shop);
routes.route('/inventory', inventory);

export default routes;
