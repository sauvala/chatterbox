const express = require('express');
const app = express();
var path = require('path');

app.set('port', (process.env.PORT || 3001));

app.get('/hello', (request, response) => {
  console.log('called to backend');
  response.send('hello from backend');
});

app.listen(app.get('port'), () => {
  console.log(`chatterbox backend server is running on port: ${app.get('port')}`);
});

if (process.env.NODE_ENV === 'production') {
  console.log("Running in production mode");
  app.use(express.static(path.resolve('build/')));
}

app.get('/', (request, response) => {
  response.sendFile(path.resolve('build/index.html'));
});

module.exports = app;