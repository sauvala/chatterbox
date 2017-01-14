import React from 'react';
import ReactDOM from 'react-dom';
import MessagesViewSpace from '../MessagesViewSpace';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessagesViewSpace />, div);
});
