const express = require('express');
const fallback = require('express-history-api-fallback');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const fs = require('fs');

const app = express();
const port = process.env.LINUX_PORT || 8080;
const mode = process.env.NODE_ENV || 'prod';
const options = {
  key: fs.readFileSync('./src/server/https/server.key', 'UTF-8'),
  cert: fs.readFileSync('./src/server/https/server.cert', 'UTF-8')
};

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('dist'));

// Requires all files under root_dir/src/server/routers/api
require('./routes')(app);

// Redirects to ouer React main file.
app.use(fallback('index.html', { root: 'dist' }));

switch (mode) {
  case 'test':
    // Runs on port 8081 so the cli_test dosent interfear with anything esle.
    module.exports = app.listen(8081, () => console.log(`Listening on port ${port}!`));
    break;
  case 'dev':
    // Frontend litsents to port 3000 (see webpack settings) and backend litsens to the defaul port.
    app.listen(port, () => console.log(`Listening on port ${port}!`));
    break;
  default:
    // Only for production mode on local machine to test http/https.
    // You probably want something closer to the 'test' case as default
    // if nginx is used as a server.
    https.createServer(options, app).listen(443);
    console.log('Listening on port 443! (HTTPS)');

    http.createServer(app).listen(port);
    console.log(`Listening on port ${port}! (HTTP)`);
    break;
}
