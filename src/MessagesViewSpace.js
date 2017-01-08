import React, { Component } from 'react';

class MessagesViewSpace extends Component {
    render() {
        const height = {
            height: this.props.height
        };

        return(
            <div style={height} />
        );
    }
}

export default MessagesViewSpace;
