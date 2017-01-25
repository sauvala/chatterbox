import React from 'react';
import ReactDOM from 'react-dom';
import ChangeUsername from '../components/ChangeUsername';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChangeUsername />, div);
});
