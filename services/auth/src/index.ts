import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';
import { AuthRouter } from './modules/auth/auth.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { Request, Response } from 'express';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'up',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    developer: {
      name: 'Shariyer Shazan',
      role: 'Software Engineer',
      email: 'shariyershazan1@gmail.com',
      github: 'https://github.com/shariyerShazan',
    },
  });
});

app.use('/api/auth', AuthRouter);

app.use(errorHandler);

const port = process.env.PORT! || 3000;

const runServer = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log(`Your server is running at http://localhost:${port}`);
  });
};
runServer();
