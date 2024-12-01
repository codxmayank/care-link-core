import express from 'express';
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
import errorHandler from './middlewares/errorHandler.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(helmet());

app.use(express.json()); // Middleware to parse incoming JSON requests
app.use('/api/v1/user', userRoutes); // Routes for user API
app.use('/api/v1/auth', authRoutes); // Routes for user API
app.use(errorHandler); // Global error handling middleware

export default app;
