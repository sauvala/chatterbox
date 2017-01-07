import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

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
        console.log('key pressed');
        if (event.key === 'Enter') {
            this.onSendMessage();
        }
    }

    render() {
        const messageField = <FormControl type="text"
            value={this.state.message}
            onChange={this.onUpdateSendingMessage}
            onKeyPress={this.onKeyPressed}
            placeholder="Message..."
            autoFocus />;

        const sendMessageButton = <InputGroup.Button
            className="input-group-button"
            onClick={this.onSendMessage}>
            <Button>
                Send
            </Button>
        </InputGroup.Button>;

        return (
            <FormGroup controlId="formInlineName"
                onSubmit={event => event.preventDefault()}>
                <InputGroup>
                    {messageField}
                    {sendMessageButton}
                </InputGroup>
            </FormGroup>
        );
    }
}

export default SendMessages;
