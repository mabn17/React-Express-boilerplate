const express = require('express');
const fallback = require('express-history-api-fallback');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const fs = require('fs');

const app = express();
const port = process.env.LINUX_PORT || 8080;
const options = {
  key: fs.readFileSync('./src/server/enc/server.key', 'UTF-8'),
  cert: fs.readFileSync('./src/server/enc/server.cert', 'UTF-8')
};

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('dist'));

require('./routes')(app);

// Redirects to ouer React main file.
app.use(fallback('index.html', { root: 'dist' }));
// Starts up the server
https.createServer(options, app).listen(443);
console.log('Listening on port 443! (HTTPS)');

http.createServer(app).listen(port);
console.log(`Listening on port ${port}!`);

// https.createServer(options, app).listen(443);

// app.listen(port, () => console.log(`Listening on port ${port}!`));
