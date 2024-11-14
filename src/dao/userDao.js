import User from '../models/userModel.js';
import pool from '../config/db.js';
import { createUserQuery, fetchUserByIdQuery } from './queries/userSql.js';

const createUser = async (userData) => {
  const { name, age, phone, email, password } = userData;
  const res = await pool.query(createUserQuery,
    [name, age, phone, email, password]
  );
  return res.rows[0];
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

export default {
  createUser,
  fetchUserById
};
