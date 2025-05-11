import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import routes from './routes/index.js';
import { PrismaClient } from './generated/prisma/index.js';
import { logger } from 'hono/logger'
import { cors } from 'hono/cors';
import { serveStatic } from '@hono/node-server/serve-static';

const app = new Hono();
export const db = new PrismaClient();

app.use(logger());
app.use(
	cors({
		origin: 'http://localhost:5173',
	})
);

app.use('/uploads/*', serveStatic({ root: './public' }));

app.route('/', routes);

app.get('/', (c) => {
	return c.text('Test!');
});

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
});
