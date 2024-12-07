import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Todo = sequelize.define('Todo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

export default Todo;
