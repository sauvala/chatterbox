import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/ChangeUsername.css';

class ChangeUsername extends Component {
  render() {
    let close = () => {
      this.props.hidePopoverCallback(false);
    };

    if (this.props.show === true) {
      return (
        <div className="modal-container" style={{ height: 250 }}>
          <Modal
            show={this.props.show}
            onHide={close}
            container={this}
            aria-labelledby="contained-modal-title">

            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">Change username</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              Change your username
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={close}>Close</Button>
              <Button bsStyle="primary">Change</Button>
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
