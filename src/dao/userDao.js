import User from '../models/userModel.js';
import pool from '../config/db.js';
import { createUserQuery, deactivateUserByIdQuery, fetchUserByIdQuery, patchUserByIdQuery } from './queries/userSql.js';

const createUser = async (userData) => {
  try {
    const { name, age, email, phone, password } = userData;
    const res = await pool.query(createUserQuery,
      [name, age, email, phone, password]
    );
    return res.rows[0];
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

const fetchUserById = async (id) => {
  try {
    const res = await pool.query(
      fetchUserByIdQuery,
      [id]
    );
    if (!res.rows[0]) return null;

    const userData = res.rows[0];
    const user = new User(userData);

    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

const patchUserById = async (userId, userData) => {
  try {
    const { name, age, email, phone } = userData;
    const res = await pool.query(patchUserByIdQuery,
      [userId, name, age, email, phone]
    );

    return res.rows[0];
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}


const deactivateUserById = async (userId) => {
  try {
    const res = await pool.query(deactivateUserByIdQuery,
      [userId]
    );
    return res.rows[0];
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

export default {
  createUser,
  fetchUserById,
  patchUserById,
  deactivateUserById
};
