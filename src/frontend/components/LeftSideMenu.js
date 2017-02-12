import React, { Component } from 'react';
import ChatRooms from './ChatRooms';
import CreateNewRoom from './CreateNewRoom';
import '../styles/LeftSideMenu.css';

class LeftSideMenu extends Component {
  render() {
    const style = {
      display: this.props.visibility,
    };
    return (
      <div style={style} className="background">
        <ChatRooms changeRoom={this.props.changeRoom} chatRooms={this.props.chatRooms} />
        <CreateNewRoom onCreateNewChannel={this.props.onCreateNewChannel} />
      </div>
    );
  }
}

export default LeftSideMenu;