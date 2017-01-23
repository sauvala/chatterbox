import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import ChatRoomButton from './ChatRoomButton.js';
import '../styles/ChatRooms.css';

class ChatRooms extends Component {
  render() {
    const chatRooms = this.props.chatRooms.map(
      (chatRoom, index) => <ChatRoomButton
        key={index}
        roomId={chatRoom}
        changeRoom={this.props.changeRoom} />);
    return (
      <div className="roomList">
        <ListGroup height="100">
          {chatRooms}
        </ListGroup>
      </div>
    );
  }
}

export default ChatRooms;