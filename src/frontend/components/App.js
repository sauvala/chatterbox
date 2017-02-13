import React, { Component } from 'react';
import MenuButton from './MenuButton.js';
import Messages from './Messages.js';
import SendMessages from './SendMessages';
import ChangeUsername from './ChangeUsername';
import LeftSideMenu from './LeftSideMenu';
import '../styles/App.css';
import io from 'socket.io-client';
const socket = io();

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [''], username: 'anonymous' + this.getRandomInt(1, 1000),
      currentRoom: 'Main Room', chatRooms: [''], showChangeUsernamePopover: false,
      showLeftSideMenu: 'none'
    };
    this.onSendMessage = this.onSendMessage.bind(this);
    this.changeRoom = this.changeRoom.bind(this);
    this.createNewChatRoom = this.createNewChatRoom.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
    this.usernamePopover = this.usernamePopover.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
  }

  componentDidMount() {
    socket.on('server:message', data => {
      this.setState({ messages: this.state.messages.concat([data]) });
    });

    socket.on('server:userConnected', data => {
      this.setState({ chatRooms: data });
      this.changeRoom(data[0]);
    });

    socket.on('server:chatRoomsUpdate', chatRooms => {
      this.setState({ chatRooms: chatRooms });
    });
  }

  onSendMessage(message) {
    socket.emit('client:sendMessage',
      this.state.username + ': ' + message, this.state.currentRoom);
  }

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  createNewChatRoom(newRoomName) {
    socket.emit('client:createNewChatRoom', newRoomName);
    this.changeRoom(newRoomName);
  }

  changeRoom(newRoomId) {
    var oldRoomId = this.state.currentRoom;
    this.setState({ currentRoom: newRoomId, messages: [] });
    socket.emit('client:changeRoom', oldRoomId, newRoomId);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  usernamePopover(isVisible) {
    if (isVisible) {
      this.setState({ showChangeUsernamePopover: true });
    } else {
      this.setState({ showChangeUsernamePopover: false });
    }
  }

  onSideMenuButtonClick() {
    if (this.state.showLeftSideMenu === 'none') {
      this.setState({ showLeftSideMenu: 'block' });
    } else {
      this.setState({ showLeftSideMenu: 'none' });
    }
  }

  changeUsername(newUsername) {
    this.setState({ username: newUsername });
  }

  render() {
    return (
      <div className="mainContent">
        <div className="title">
          <h1>Chatterbox</h1>
          <div className="select-chat-room">
            <MenuButton onClick={() => this.onSideMenuButtonClick()} />
          </div>
        </div>
        <LeftSideMenu changeRoom={this.changeRoom} chatRooms={this.state.chatRooms}
          onCreateNewChannel={this.createNewChatRoom} visibility={this.state.showLeftSideMenu}
          username={this.state.username} usernamePopover={this.usernamePopover}/>
        <div className="messages">
          <Messages messages={this.state.messages} />
          <ChangeUsername show={this.state.showChangeUsernamePopover}
            hidePopoverCallback={this.usernamePopover}
            changeUsernameCallback={this.changeUsername} />
          <div>
          </div>
        </div>
        <div className="send-messages">
          <SendMessages onSendMessage={this.onSendMessage} />
        </div>
      </div>
    );
  }
}

export default App;
