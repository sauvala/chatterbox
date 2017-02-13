import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ChatRooms from './ChatRooms';
import CreateNewRoom from './CreateNewRoom';
import '../styles/LeftSideMenu.css';

class LeftSideMenu extends Component {
  render() {
    const style = {
      display: this.props.visibility,
      backgroundColor: 'black'
    };
    return (
      <div style={style} className="panel">
        <div>
          Your username: {this.props.username}
        </div>
        <div>
          <Button>Change</Button>
        </div>
        Chatrooms:
        <ChatRooms changeRoom={this.props.changeRoom} chatRooms={this.props.chatRooms} />
        <CreateNewRoom onCreateNewChannel={this.props.onCreateNewChannel} />
      </div>
    );
  }
}

export default LeftSideMenu;