import dotenv from 'dotenv';

dotenv.config();

export const config = {
  jwtSecret: process.env.JWT_SECRET || 'default-secret',
  jwtExpiration: process.env.JWT_EXPIRATION || '1h',
  port: process.env.PORT || 3000
};
