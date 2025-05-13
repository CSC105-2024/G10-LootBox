import { Hono } from 'hono';
import * as summonController from '../controllers/summon.controller.js';

const summonRoutes = new Hono();

summonRoutes.post('/', summonController.handleSummon);

export default summonRoutes;
