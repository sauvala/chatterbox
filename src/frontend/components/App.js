import React, { Component } from 'react';
import Messages from './Messages.js';
import SendMessages from './SendMessages';
import MessagesViewSpace from './MessagesViewSpace';
import ChatRooms from './ChatRooms';
import CreateNewRoom from './CreateNewRoom';
import ChangeUsername from './ChangeUsername';
import '../styles/App.css';
import io from 'socket.io-client';
import { Grid, Row, Col, Button } from 'react-bootstrap';
const socket = io();

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [''], username: 'anonymous' + this.getRandomInt(1, 1000),
      currentRoom: 'Main Room', chatRooms: [''], showChangeUsernamePopover: false
    };
    this.onSendMessage = this.onSendMessage.bind(this);
    this.changeRoom = this.changeRoom.bind(this);
    this.createNewChatRoom = this.createNewChatRoom.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
    this.usernamePopover = this.usernamePopover.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
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
    socket.emit('client:sendMessage',
      this.state.username + ': ' + message, this.state.currentRoom);
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
    this.setState({ currentRoom: newRoomId, messages: [] });
    socket.emit('client:changeRoom', oldRoomId, newRoomId);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  usernamePopover(isVisible) {
    if (isVisible) {
      this.setState({ showChangeUsernamePopover: true });
    } else {
      this.setState({ showChangeUsernamePopover: false });
    }
  }

  changeUsername(newUsername) {
    this.setState({ username: newUsername });
  }

  render() {
    return (
      <div className="main-content">
        <div className="title">
          <h1>Chatterbox</h1>
          {/*<div className="username">
            Username: {this.state.username}
            <Button onClick={() => this.usernamePopover(true)}
              className="change-username-button">
              Change
            </Button>
          </div>*/}
        </div>
        <div className="messages">
          <Messages messages={this.state.messages} />
        </div>
        <div className="sendMessages">
          <SendMessages onSendMessage={this.onSendMessage} />
        </div>
        {/*<Grid>
          <Row>
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
                <ChangeUsername show={this.state.showChangeUsernamePopover}
                  hidePopoverCallback={this.usernamePopover}
                  changeUsernameCallback={this.changeUsername} />
              </Row>
              <Row>
                <MessagesViewSpace height={35} />
                <SendMessages onSendMessage={this.onSendMessage} />
              </Row>
            </Col>
          </Row>
        </Grid>*/}
      </div>
    );
  }
}

export default App;
