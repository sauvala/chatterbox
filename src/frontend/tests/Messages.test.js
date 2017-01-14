import React from 'react';
import ReactDOM from 'react-dom';
import Messages from '../Messages';

it('renders without crashing when messages is empty', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Messages messages={[]}/>, div);
});

it('renders without crashing when has one message', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Messages messages={['message1']}/>, div);
});

it('renders without crashing when has two same messages', () => {
  const div = document.createElement('div');
  var message = 'message';
  ReactDOM.render(<Messages messages={[message, message]}/>, div);
});

it('renders without crashing when has several messages', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Messages messages={['message1', 'message2', 'message3']}/>, div);
});
