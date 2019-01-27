const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.TEXT
    },
    password: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
