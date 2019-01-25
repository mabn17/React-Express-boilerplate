const express = require('express');

const app = express();
const EXPRESS_PORT = process.env.LINUX_PORT || 8080;

// Setting up the Database (Not yet added)

// const mongoose = require('mongoose');
// const config = require('../../config/config');

// mongoose.connect(config.db_dev);
// mongoose.Promise = global.Promise;

app.use(express.static('dist'));

// Api routes
require('./routes')(app);

// app.get('/api/testingShit', (req, res) => {
//   res.send({ test: 'test' });
// });
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// app.get('/*', (req, res) => {
//   res.sendFile('index.html', (err) => {
//     res.status(500).send(err);
//   });
// });

app.listen(EXPRESS_PORT, () => console.log(`Listening on port ${EXPRESS_PORT}!`));
