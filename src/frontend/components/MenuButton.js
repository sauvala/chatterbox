import React, { Component } from 'react';
import {Menu} from 'react-entypo';
import '../styles/MenuButton.css';
import { Button } from 'react-bootstrap';

class MenuButton extends Component {

onSendMessage() {
  console.log("Hello");
}

  render() {
    return (
      <Button onClick={this.props.onClick}>
        &#9776;
      </Button>
    );
  }
}

export default MenuButton;
