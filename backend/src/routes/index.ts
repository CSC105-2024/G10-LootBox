import { Hono } from 'hono';
import userRoutes from './user.routes.js';
import shopRouter from './shop.routes.js';
import inventory from './inventory.routes.js';
import summonRoutes from './summon.routes.js';

const routes = new Hono();

routes.route('/user', userRoutes);
routes.route('/shop', shopRouter);
routes.route('/inventory', inventory);
routes.route('/summon', summonRoutes);

export default routes;