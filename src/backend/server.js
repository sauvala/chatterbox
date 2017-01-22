const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const buildFolder = '../../build';
const publicFolder = '../../public';

const chatRooms = ['Main Room'];

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  console.log("Running in production mode");
  app.use(express.static(path.join(__dirname, buildFolder)));
}

app.set('port', (process.env.PORT || 3001));

server.listen(app.get('port'), () => {
  console.log(`chatterbox backend server is running on port: ${app.get('port')}`);
});

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.emit('server:chatRooms', chatRooms);
  socket.on('client:sendMessage', function(message){
    console.log('message: ' + message);
    io.emit('server:message', message);
  });
});

app.get('/', (request, response) => {
  const buildIndex = path.join(__dirname, buildFolder, 'index.html');
  if (fs.existsSync(path)) {
    response.sendFile(buildIndex);
  } else {
    response.sendFile(path.join(__dirname, publicFolder, 'index.html'));
  }
});

module.exports = app;