// models/Notification.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Notification = sequelize.define('Notification', {
  message: { type: DataTypes.STRING },
  read: { type: DataTypes.BOOLEAN, defaultValue: false },
  date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

Notification.belongsTo(User);

module.exports = Notification;
