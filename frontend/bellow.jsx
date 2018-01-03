import React from 'react';
import ReactDOM from 'react-dom';

import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

//Testing start
window.login = login;
//Testing end

document.addEventListener('DOMContentLoaded', () => {
  window.$ = $;
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={ store } />, root);
});
