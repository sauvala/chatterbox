[![Build Status](https://travis-ci.org/sauvala/chatterbox.svg?branch=master)](https://travis-ci.org/sauvala/chatterbox)

This is a simple web-based chat application.

The live version can be found at Heroku: https://chatterboxchat.herokuapp.com/ and 
new commits will be deployed automatically to Heroku via Travis CI.

## Features
- Chat rooms: users can create and join chatrooms.
- Users can send messages to chat rooms they are currently and other users in that chat room can read them.
- Users can change their username.

## Tecnical notes
- Uses ReactJS as the rendering tool
- NodeJS as backend server
- socket.io for sending the messages
- Frontend-testing with Jest
- Backend testing with Chai and Mocha
- Code coverage by istanbul
- Webpack module bundler and Webpack development server for frontend with hot reload
- Nodemon for backend server hot reload 

## Initial setup
`npm install`
at the root folder to install dependencies

`npm start` 
to start the development servers (backend and frontend). 
Navigate to http://localhost:3000 at your browser to start chatting!

`npm test`
runs the frontend and backend tests

`npm run build`
creates a build version than can be deployed
