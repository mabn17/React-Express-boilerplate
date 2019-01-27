const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// For Travis and S builds.. Rememver to change later
const jwtConfig = require('fs').existsSync('../../../../config/jwt/config')
  ? require('../../../../config/jwt/config')
  : require('../../../../config/jwt/config.example');
// const jwtConfig = require('../../../../config/jwt/config');

const User = require('../../db/models/Users');

process.env.SECRET_KEY = process.env.SECRET_KEY || jwtConfig.key;

module.exports = (app) => {
  // Register
  app.post('/api/register', (req, res) => {
    const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    };

    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then((user) => {
        if (!user) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            userData.password = hash;
            User.create(userData)
              .then((nUser) => {
                res.json({ status: `${nUser.email} registered` });
              })
              .catch((nErr) => {
                res.send(`error: ${nErr}`);
              });
          });
        } else {
          res.json({ error: 'User already exists' });
        }
      })
      .catch((err) => {
        res.send(`error: ${err}`);
      });
  });

  // Login
  app.post('/api/login', (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then((user) => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            });
            res.send(token);
          }
        } else {
          res.status(400).json({ error: 'User does not exist' });
        }
      })
      .catch((err) => {
        res.status(400).json({ error: err });
      });
  });
};
