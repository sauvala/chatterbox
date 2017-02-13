import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import '../styles/CreateNewRoom.css';

class CreateNewRoom extends Component {
  constructor(props) {
    super(props);
    this.state = { newChannelName: '' };
    this.onUpdateNewChannelName = this.onUpdateNewChannelName.bind(this);
    this.onCreateNewChannel = this.onCreateNewChannel.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  onUpdateNewChannelName(event) {
    this.setState({ newChannelName: event.target.value });
  }

  onKeyPressed(event) {
    if (event.key === 'Enter') {
      this.onSendMessage();
    }
  }

  onCreateNewChannel() {
    this.props.onCreateNewChannel(this.state.newChannelName);
    this.setState({ newChannelName: '' });
  }

  render() {
    const newChannelNameField = <FormControl type="text"
      onChange={this.onUpdateNewChannelName}
      onKeyPress={this.onKeyPressed}
      value={this.state.newChannelName}
      placeholder="New room name..." />;

    const createNewChatRoomButton = <InputGroup.Button
      onClick={this.onCreateNewChannel}>
      <Button>Create</Button>
    </InputGroup.Button>;

    return (
      <div>
        <FormGroup className="create-new-room"
          onSubmit={event => event.preventDefault()}>
          <InputGroup>
            {newChannelNameField}
            {createNewChatRoomButton}
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

export default CreateNewRoom;