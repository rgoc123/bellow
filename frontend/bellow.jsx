import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  window.$ = $;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Bellow!</h1>, root);
});
