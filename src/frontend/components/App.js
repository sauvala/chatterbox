import React, { Component } from 'react';
import Messages from './Messages.js';
import SendMessages from './SendMessages';
import MessagesViewSpace from './MessagesViewSpace';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { messages: [''] };
    this.onSendMessage = this.onSendMessage.bind(this);
  }

  onSendMessage(message) {
    var headers = new Headers();
    headers.append('content-type', 'application/json');
    this.setState({ messages: this.state.messages.concat([message]) });
    fetch('/sendMessage', {
      method: 'post',
      headers: headers,
      body: JSON.stringify({
        user: 'testuser',
        message: message
      })
    }).then((response) => {
      console.log(response);
    });
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
