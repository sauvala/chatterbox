import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class ChatRoomButton extends Component {
  render() {
    return(
      <ListGroupItem onClick={() => this.props.changeRoom(this.props.roomId)}>
        {this.props.roomId}
      </ListGroupItem>
    );
  }
}

export default ChatRoomButton;