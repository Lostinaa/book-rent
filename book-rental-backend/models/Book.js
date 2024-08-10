// models/Book.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Book = sequelize.define('Book', {
  title: { type: DataTypes.STRING },
  author: { type: DataTypes.STRING },
  category: { type: DataTypes.STRING },
  status: { type: DataTypes.ENUM('pending', 'approved'), defaultValue: 'pending' }
});

Book.belongsTo(User, { as: 'owner' });

module.exports = Book;
