const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3001));

app.get('/hello', (request, response) => {
  console.log('called to backend');
  response.send('hello from backend');
});

app.listen(app.get('port'), () => {
  console.log(`chatterbox backend server is running on port: ${app.get('port')}`);
});
