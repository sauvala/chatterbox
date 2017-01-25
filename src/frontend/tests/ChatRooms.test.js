import React from 'react';
import ReactDOM from 'react-dom';
import ChatRooms from '../components/ChatRooms';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatRooms chatRooms={[]} />, div);
});
