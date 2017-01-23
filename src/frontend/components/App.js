import React, { Component } from 'react';
import Messages from './Messages.js';
import SendMessages from './SendMessages';
import MessagesViewSpace from './MessagesViewSpace';
import ChatRooms from './ChatRooms';
import CreateNewRoom from './CreateNewRoom';
import '../styles/App.css';
import io from 'socket.io-client';
import { Grid, Row, Col } from 'react-bootstrap';
const socket = io();

class App extends Component {
  constructor() {
    super();
    this.state = { messages: [''], userName: 'Test User', currentRoom: 'Main Room', chatRooms: [''] };
    this.onSendMessage = this.onSendMessage.bind(this);
    this.changeRoom = this.changeRoom.bind(this);
    this.createNewChatRoom = this.createNewChatRoom.bind(this);
  }

  componentDidMount() {
    socket.on('server:message', data => {
      this.setState({ messages: this.state.messages.concat([data]) });
    });

    socket.on('server:userConnected', data => {
      this.setState({ chatRooms: data });
      this.changeRoom(data[0]);
    });

    socket.on('server:chatRoomsUpdate', chatRooms => {
      this.setState({ chatRooms: chatRooms });
    });
  }

  onSendMessage(message) {
    console.log('Room:' + this.state.currentRoom);
    socket.emit('client:sendMessage', this.state.userName + ': ' + message, this.state.currentRoom);
  }

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  createNewChatRoom(newRoomName) {
    socket.emit('client:createNewChatRoom', newRoomName);
    this.changeRoom(newRoomName);
  }

  changeRoom(newRoomId) {
    var oldRoomId = this.state.currentRoom;
    this.setState({currentRoom: newRoomId, messages: []});
    console.log('Changing room: ' + oldRoomId + ' ' + newRoomId);
    socket.emit('client:changeRoom', oldRoomId, newRoomId);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Chatterbox</h2>
        </div>
        <MessagesViewSpace height={70} />
        <Grid>
          <Row className="show-grid">
            <Col xs={3} md={3}>
              <Row>
                <ChatRooms changeRoom={this.changeRoom} chatRooms={this.state.chatRooms} />
              </Row>
              <Row>
                <CreateNewRoom onCreateNewChannel={this.createNewChatRoom} />
              </Row>
            </Col>
            <Col xs={9} md={9}>
              <Row>
                <Messages messages={this.state.messages} />
              </Row>
              <Row>
                <MessagesViewSpace height={35} />
                <SendMessages onSendMessage={this.onSendMessage} />
                </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
