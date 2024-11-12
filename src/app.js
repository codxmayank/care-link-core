import express from 'express';
import todoRoutes from './routes/todoRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(express.json()); // Middleware to parse incoming JSON requests
app.use('/api/v1/todos', todoRoutes); // Routes for todo API
app.use(errorHandler); // Global error handling middleware

export default app;
