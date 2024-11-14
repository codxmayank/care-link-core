import express from 'express';
import userRoutes from './routes/userRoutes.js'
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(express.json()); // Middleware to parse incoming JSON requests
app.use('/api/v1/user', userRoutes); // Routes for user API
app.use(errorHandler); // Global error handling middleware

export default app;
