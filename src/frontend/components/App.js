import React, { Component } from 'react';
import Messages from './Messages.js';
import SendMessages from './SendMessages';
import MessagesViewSpace from './MessagesViewSpace';
import '../styles/App.css';
import io from 'socket.io-client';
const socket = io();

class App extends Component {
  constructor() {
    super();
    this.state = { messages: [''], userName: 'Test User', chatRoom: 'main' };
    this.onSendMessage = this.onSendMessage.bind(this);
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

  render() {
    return (
      <div className="App" >
        <div className="App-header">
          <h2>Chatterbox</h2>
        </div>
        <MessagesViewSpace height={70} />
        <Messages messages={this.state.messages} />
        <MessagesViewSpace height={35} />
        <SendMessages onSendMessage={this.onSendMessage} />
      </div >
    );
  }
}

export default App;
