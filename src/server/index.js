const express = require('express');
const fallback = require('express-history-api-fallback');

const app = express();
const port = process.env.LINUX_PORT || 8080;

// Setting up the Database (Not yet added)
// This is for mongoDB, will leave it commented out if we deside to use it.

// const mongoose = require('mongoose');
// const config = require('../../config/config');
// mongoose.connect(config.db_dev);
// mongoose.Promise = global.Promise;

// Sets up the default folder
app.use(express.static('dist'));
// Api routes
require('./routes')(app);

// Redirects to ouer React main file.
app.use(fallback('index.html', { root: 'dist' }));
app.listen(port, () => console.log(`Listening on port ${port}!`));
