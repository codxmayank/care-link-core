import userService from '../services/userService.js';

export const createUser = async (req, res, next) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const userData = await userService.getUserById(req.params.id);
    res.status(200).json(userData);
  } catch (error) {
    next(error);
  }
};

export const updateUserById = async (req, res, next) => {
  try {
    const userData = await userService.updateUserById(req.params.id, req.body);
    res.status(201).json(userData);
  } catch (error) {
    next(error);
  }
};

export const deactivateUserById = async (req, res, next) => {
  try {
    const userData = await userService.deactivateUserById(req.params.id);
    res.status(201).json(userData);
  } catch (error) {
    next(error);
  }
};
