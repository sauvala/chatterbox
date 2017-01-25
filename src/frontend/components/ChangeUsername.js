import React, { Component } from 'react';
import { Modal, Button, FormControl, FormGroup } from 'react-bootstrap';

class ChangeUsername extends Component {
  constructor() {
    super();
    this.state = { newUsername: '' };
    this.onChangeClick = this.onChangeClick.bind(this);
    this.close = this.close.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.onUpdateNewUsername = this.onUpdateNewUsername.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  onChangeClick() {
    if (this.getValidationState() === 'success') {
      this.props.changeUsernameCallback(this.state.newUsername);
      this.close();
    }
  }

  close() {
    this.props.hidePopoverCallback(false);
  }

  onUpdateNewUsername(event) {
    this.setState({ newUsername: event.target.value });
  }

  onKeyPressed(event) {
    if (event.key === 'Enter') {
      this.onChangeClick();
    }
  }

  getValidationState() {
    const length = this.state.newUsername.length;
    if (length > 3 && /\S/.test(this.state.newUsername)) {
      return 'success';
    } else {
      return 'error';
    }
  }

  render() {
    if (this.props.show === true) {
      return (
        <div className="static-modal">
          <Modal
            show={this.props.show}
            onHide={this.close}
            container={this}
            backdrop={false} 
            aria-labelledby='modal-label' >

            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Change username
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <FormGroup validationState={this.getValidationState()}>
                <FormControl type="text"
                  value={this.state.newUsername}
                  onChange={this.onUpdateNewUsername}
                  onKeyPress={this.onKeyPressed}
                  placeholder="New username..."
                  autoFocus />
                <FormControl.Feedback />
              </FormGroup>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
              <Button bsStyle="primary"
                onClick={this.onChangeClick}>Change</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    } else {
      return (null);
    }
  }
}

export default ChangeUsername;
