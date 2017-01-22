import React, { Component } from 'react';
import Messages from './Messages.js';
import SendMessages from './SendMessages';
import MessagesViewSpace from './MessagesViewSpace';
import ChatRooms from './ChatRooms';
import '../styles/App.css';
import io from 'socket.io-client';
import { Grid, Row, Col } from 'react-bootstrap';
const socket = io();

class App extends Component {
  constructor() {
    super();
    this.state = { messages: [''], userName: 'Test User', chatRoom: 'main' };
    this.onSendMessage = this.onSendMessage.bind(this);
    this.changeRoom = this.changeRoom.bind(this);
  }

  componentDidMount() {
    socket.on('server:message', data => {
      this.setState({ messages: this.state.messages.concat([data]) });
    })
  }

  onSendMessage(message) {
    socket.emit('client:sendMessage', this.state.userName + ': ' + message);
  }

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  changeRoom(roomIndex) {
    alert('You clicked the Room ' + roomIndex);
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
              <ChatRooms changeRoom={this.changeRoom}/>
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
