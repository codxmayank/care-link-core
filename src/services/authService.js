import jwt from 'jsonwebtoken';
import { config } from '../configs/env.js';
import { hashPassword, comparePasswords } from '../utils/passwordUtils.js';
import { createUserDao, getUserByEmail } from '../dao/userDao.js';
import { messages } from '../constants/messages.js';

export const registerUser = async (userReqData) => {
  const { name, age, email, phone, password } = userReqData;
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    throw new Error(messages.userExists);
  }
  const hashedPassword = await hashPassword(password);
  return await createUserDao({
    name,
    age,
    email,
    phone,
    password: hashedPassword
  });
};

export const loginUser = async (email, password) => {
  const user = await getUserByEmail(email);
  if (!user || !(await comparePasswords(password, user?.password))) {
    throw new Error(messages.invalidCredentials);
  }

  const token = jwt.sign({ email: user.email }, config.jwtSecret, {
    expiresIn: config.jwtExpiration
  });
  return token;
};
