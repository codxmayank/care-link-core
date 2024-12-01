import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

export const comparePasswords = async (plain, hashed) => {
  return await bcrypt.compare(plain, hashed);
};
