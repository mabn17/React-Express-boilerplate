const express = require('express');
const fallback = require('express-history-api-fallback');

const app = express();
const port = process.env.LINUX_PORT || 8080;

// ONLY IF THERE ARE PROBLEMS WITH CROS IN development
// const cros = require('cros);
// const bodyParser = require('body-parser);
/**
 * app.use(bodyParser.json());
 * app.use(cros()); // development only
 * app.use(bodyParser.urlencoded({ extended: false }));
 */

// Sets up the default folder
app.use(express.static('dist'));
// Api routes
require('./routes')(app);

// Redirects to ouer React main file.
app.use(fallback('index.html', { root: 'dist' }));
app.listen(port, () => console.log(`Listening on port ${port}!`));
