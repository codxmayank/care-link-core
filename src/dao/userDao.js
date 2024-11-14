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
  const res = await pool.query(fetchUserByIdQuery,
    [id]
  );
  // return data based on user schema instead
  return res.rows[0];
}

export default {
  createUser,
  fetchUserById
};
