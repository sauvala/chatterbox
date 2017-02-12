import React, { Component } from 'react';

class MessagesViewSpace extends Component {
    render() {
        const style = {
            height: this.props.height + '%'
        };

        return(
            <div style={style} />
        );
    }
}

export default MessagesViewSpace;
