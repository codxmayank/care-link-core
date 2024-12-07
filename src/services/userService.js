import userDao from '../dao/userDao.js';
import { createUserDao } from '../dao/userDao.js';

const createUser = async (userData) => {
  return await createUserDao(userData);
};

const getUserById = async (id) => {
  return await userDao.fetchUserById(id);
};

const updateUserById = async (id, userData) => {
  return await userDao.patchUserById(id, userData);
};

const deactivateUserById = async (id) => {
  return await userDao.deactivateUserById(id);
};

export default {
  createUser,
  getUserById,
  updateUserById,
  deactivateUserById
};
