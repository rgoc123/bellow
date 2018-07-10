import React from 'react';
import ReactDOM from 'react-dom';

import { fetchBusinesses } from './util/apiHelper';
import configureStore from './store/store';
import Root from './components/root';

//Testing start
window.fetchBusinesses = fetchBusinesses;
//Testing end

document.addEventListener('DOMContentLoaded', () => {
  window.$ = $;
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    delete window.currentUser;
  } else {
    store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
  }
  ReactDOM.render(<Root store={ store } />, root);
});
