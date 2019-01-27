// Copy this file as config.js in the same folder, with the propper data
module.exports = {
  login: {
    database: 'database',
    username: 'username',
    pass: 'password'
  },
  details: {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};
