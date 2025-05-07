import { Hono } from 'hono';
import userRoutes from './user.routes.js';
import shopRouter from './shop.routes.js';
import inventory from './inventory.routes.js';

const routes = new Hono();

routes.route('/user', userRoutes);
routes.route('/shop', shopRouter);
routes.route('/inventory', inventory);

export default routes;
