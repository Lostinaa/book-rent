// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bookrental', 'postgress', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
