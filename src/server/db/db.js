const Sequelize = require('sequelize');

// For Travis and S builds.. Rememver to change later
const config = require('fs').existsSync('../../../config/db/config')
  ? require('../../../config/db/config')
  : require('../../../config/db/config.example');

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
