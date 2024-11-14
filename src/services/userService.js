import userDao from "../dao/userDao.js"

const createUser = async (userData) => {
  return await userDao.createUser(userData);
}

const getUserById = async (id) => {
  return await userDao.fetchUserById(id);
}

export default {
  createUser,
  getUserById
};
