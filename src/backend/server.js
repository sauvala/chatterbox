const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const buildFolder = '../../build';

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3001));

app.post('/sendMessage', (request, response) => {
  console.log('/sendMessage from user: ' + request.body.user);
  console.log('/sendMessage with message: ' + request.body.message);
  response.sendStatus(200)
});

app.listen(app.get('port'), () => {
  console.log(`chatterbox backend server is running on port: ${app.get('port')}`);
});

if (process.env.NODE_ENV === 'production') {
  console.log("Running in production mode");
  app.use(express.static(path.join(__dirname, buildFolder)));
}

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, buildFolder, 'index.html'));
});

module.exports = app;