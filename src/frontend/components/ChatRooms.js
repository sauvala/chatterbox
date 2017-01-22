import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import ChatRoomButton from './ChatRoomButton.js';
import '../styles/ChatRooms.css';

class ChatRooms extends Component {
    render() {
        return (
            <div className="roomList">
                <ListGroup height="100">
                    <ChatRoomButton roomId="Hello" changeRoom={this.props.changeRoom}/>
                </ListGroup>
            </div>
        );
    }
}

export default ChatRooms;