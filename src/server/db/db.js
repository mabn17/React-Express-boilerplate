const Sequelize = require('sequelize');
const config = require('../../../config/db/config');

const db = {};
const sequelize = new Sequelize(
  config.login.database,
  config.login.username,
  config.login.pass,
  config.details
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
