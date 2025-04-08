import express from 'express';
import dotenv from 'dotenv';
import { logger } from './lib/logger';
import { logRequest } from './middlewares/log.middleware';
import routes from './routes';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(logRequest);

app.use(express.json());
app.use('/api', routes);

app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  logger.info(`🚀 Server running at http://localhost:${port}`);
});