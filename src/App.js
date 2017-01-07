import React, { Component } from 'react';
import Messages from './Messages.js';
import SendMessages from './SendMessages';
import MessagesViewSpace from './MessagesViewSpace';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { messages: [''] };
    this.onSendMessage = this.onSendMessage.bind(this);
  }

  onSendMessage(message) {
    this.setState({ messages: this.state.messages.concat(message) });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Chatterbox</h2>
        </div>
        <Messages messages={this.state.messages} />
        <MessagesViewSpace />
        <SendMessages onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default App;
