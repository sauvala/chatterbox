import React from 'react';
import ReactDOM from 'react-dom';
import SendMessages from '../components/SendMessages';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SendMessages />, div);
});
