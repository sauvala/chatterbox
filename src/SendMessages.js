import React, { Component } from 'react';

class SendMessages extends Component {
  render() {
    return (
      <div>
        <input type="text" value="" name="textbox" size="50" />
        <button>Send</button>
      </div>
    );
  }
}

export default SendMessages;
