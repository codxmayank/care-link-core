import jwt from 'jsonwebtoken';
import { config } from '../configs/env.js';
import { messages } from '../constants/messages.js';

export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: messages.unauthorized });

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: messages.tokenExpired });
  }
};
