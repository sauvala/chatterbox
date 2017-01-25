import React from 'react';
import ReactDOM from 'react-dom';
import CreateNewRoom from '../components/CreateNewRoom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateNewRoom />, div);
});
