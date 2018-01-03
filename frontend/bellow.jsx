import React from 'react';
import ReactDOM from 'react-dom';

import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';

//Testing start
window.signup = signup;
window.login = login;
window.logout = logout;
//Testing end

document.addEventListener('DOMContentLoaded', () => {
  window.$ = $;
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Welcome to Bellow!</h1>, root);
});
