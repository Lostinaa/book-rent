// models/Rental.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Book = require('./Book');
const User = require('./User');

const Rental = sequelize.define('Rental', {
  startDate: { type: DataTypes.DATE },
  endDate: { type: DataTypes.DATE },
  status: { type: DataTypes.ENUM('pending', 'approved', 'returned'), defaultValue: 'pending' }
});

Rental.belongsTo(Book);
Rental.belongsTo(User, { as: 'renter' });

module.exports = Rental;
