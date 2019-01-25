const fs = require('fs');

/* eslint-disable */

module.exports = app => {
  fs.readdirSync(`${__dirname}/api/`).forEach(file => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  });
};

/* eslint-enable */
