import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class ChatRooms extends Component {
    constructor() {
        super();
        this.alertClicked = this.alertClicked.bind(this);
    }

    alertClicked() {
        alert('You clicked the third ListGroupItem');
    }

    render() {
        return (
            <div class="roomList">
                <ListGroup>
                    <ListGroupItem href="#link1">Link 1</ListGroupItem>
                    <ListGroupItem href="#link2">Link 2</ListGroupItem>
                    <ListGroupItem onClick={this.alertClicked}>
                        Trigger an alert
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default ChatRooms;