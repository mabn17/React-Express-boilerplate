const express = require('express');
const os = require('os');

const app = express();
const EXPRESS_PORT = process.env.LINUX_PORT || 8080;

app.use(express.static('dist'));
// For multiple lines
app.get('/api/testingShit', (req, res) => {
  res.send({ test: 'test' });
});
// For single lines
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/*', (req, res) => {
  res.sendFile('index.html', (err) => {
    res.status(500).send(err);
  });
});

app.listen(EXPRESS_PORT, () => console.log(`Listening on port ${EXPRESS_PORT}!`));
