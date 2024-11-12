import todoDAO from '../dao/todoDAO.js';

const getAllTodos = async () => {
  return await todoDAO.fetchAllTodos();
};

const getTodoById = async (id) => {
  return await todoDAO.fetchTodoById(id);
};

const addTodo = async (todoData) => {
  return await todoDAO.createTodo(todoData);
};

const editTodo = async (id, todoData) => {
  return await todoDAO.updateTodo(id, todoData);
};

const removeTodo = async (id) => {
  return await todoDAO.deleteTodo(id);
};

export default {
  getAllTodos,
  getTodoById,
  addTodo,
  editTodo,
  removeTodo,
};
