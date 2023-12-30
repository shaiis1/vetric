import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { profileRouter } from './routes/profileRouter.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Profile routes
app.use('/fetchProfile', profileRouter);

// Error handling middleware
app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
