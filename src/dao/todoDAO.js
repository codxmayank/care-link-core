// src/dao/todoDAO.js
import pool from '../configs/db.js';

// Fetch all todos
const fetchAllTodos = async () => {
  const result = await pool.query('SELECT * FROM todo_list ORDER BY id');
  console.log(result);
  
  return result.rows;
};

// Fetch a todo by ID
const fetchTodoById = async (id) => {
  const result = await pool.query('SELECT * FROM todo_list WHERE id = $1', [id]);
  return result.rows[0];
};

// Create a new todo
const createTodo = async (todoData) => {
  const { title, description, isCompleted } = todoData;
  const result = await pool.query(
    'INSERT INTO todos (title, description, isCompleted) VALUES ($1, $2, $3) RETURNING *',
    [title, description, isCompleted]
  );
  return result.rows[0];
};

// Update an existing todo
const updateTodo = async (id, todoData) => {
  const { title, description, isCompleted } = todoData;
  const result = await pool.query(
    'UPDATE todos SET title = $1, description = $2, isCompleted = $3 WHERE id = $4 RETURNING *',
    [title, description, isCompleted, id]
  );
  return result.rows[0];
};

// Delete a todo by ID
const deleteTodo = async (id) => {
  const result = await pool.query('DELETE FROM todo_list WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

export default {
  fetchAllTodos,
  fetchTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
