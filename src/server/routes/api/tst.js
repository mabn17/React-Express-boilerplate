const os = require('os');

module.exports = (app) => {
  app.get('/api/testing', (req, res) => {
    res.send({ test: 'test' });
  });

  app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
};
