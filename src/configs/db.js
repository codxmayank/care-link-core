import pg from 'pg';
const { Pool } = pg;
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// const pool = new Pool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
// });

// Event listener for successful connection
pool.on('connect', () => {
  console.log('Connected to the database');
});

// Event listener for errors
pool.on('error', (err) => {
  console.error('Database connection error', err.stack);
});

export default pool;
