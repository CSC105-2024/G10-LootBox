import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import routes from './routes/index.js';
import { PrismaClient } from './generated/prisma/index.js';

const app = new Hono();
export const db = new PrismaClient();

app.route('/', routes);

app.get('/', (c) => {
	return c.text('Test!');
});

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
});
