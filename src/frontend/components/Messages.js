import React, { Component } from 'react';
import '../styles/Messages.css'

class Messages extends Component {
    render() {
        const messages = this.props.messages.map(
            (message, index) => <li key={index}>{message}</li>);
        return (
            <ul>
                {messages}
            </ul>
        );
    }
}

export default Messages;
