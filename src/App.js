import React, { Component } from 'react';
import Messages from './Messages.js';
import SendMessages from './SendMessages.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Chatterbox</h2>
        </div>
        <Messages />
        <SendMessages />
      </div>
    );
  }
}

export default App;
