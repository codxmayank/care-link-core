import app from './app.js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});

// TODO: express-validator, validation, api docs, deployment, envs, logger
