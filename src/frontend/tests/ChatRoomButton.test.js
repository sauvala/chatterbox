import React from 'react';
import ReactDOM from 'react-dom';
import ChatRoomButton from '../components/ChatRoomButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatRoomButton />, div);
});
