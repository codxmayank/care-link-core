import app from './app.js';
import dotenv from 'dotenv';
let a = 10;

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// TODO: express-validator, validation, api docs, deployment, envs, logger
