import React, { Component } from 'react';

class SendMessages extends Component {
    constructor(props) {
        super(props);
        this.state = { message: '' };
        this.onUpdateSendingMessage = this.onUpdateSendingMessage.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
        this.onKeyPressed = this.onKeyPressed.bind(this);
    }

    onUpdateSendingMessage(event) {
        this.setState({ message: event.target.value });
    }

    onSendMessage() {
        this.props.onSendMessage(this.state.message);
        this.setState({ message: '' });
    }

    onKeyPressed(event) {
        if (event.key === 'Enter') {
            this.onSendMessage();
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.message}
                    onChange={this.onUpdateSendingMessage}
                    onKeyPress={this.onKeyPressed} size="50" />
                <button onClick={this.onSendMessage}>Send</button>
            </div>
        );
    }
}

export default SendMessages;
