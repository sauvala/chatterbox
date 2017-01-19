import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import '../styles/ChatRooms.css';

class ChatRooms extends Component {
    constructor() {
        super();
        this.alertClicked = this.alertClicked.bind(this);
    }

    alertClicked() {
        alert('You clicked the Room 2');
    }

    render() {
        return (
            <div className="roomList">
                <ListGroup>
                    <ListGroupItem>Main room</ListGroupItem>
                    <ListGroupItem>Room 1</ListGroupItem>
                    <ListGroupItem onClick={this.alertClicked}>
                        Room 2
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default ChatRooms;