import userDao from "../dao/userDao.js"

const createUser = async (userData) => {
  return await userDao.createUser(userData);
}

const getUserById = async (id) => {
  return await userDao.fetchUserById(id);
}

const updateUserById = async (id, userData) => {
  return await userDao.patchUserById(id, userData);
}

export default {
  createUser,
  getUserById,
  updateUserById
};
