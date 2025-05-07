import { Hono } from 'hono';
import * as shopController from '../controllers/shop.controller.js';

const shopRouter = new Hono();

shopRouter.post('/buy', shopController.buyKey);
shopRouter.post('/sell', shopController.sellItem);

export default shopRouter;
