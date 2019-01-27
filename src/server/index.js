const express = require('express');
const fallback = require('express-history-api-fallback');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.LINUX_PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('dist'));

require('./routes')(app);

// Redirects to ouer React main file.
app.use(fallback('index.html', { root: 'dist' }));
// Starts up the server
app.listen(port, () => console.log(`Listening on port ${port}!`));
