import React from 'react';
import ReactDOM from 'react-dom';

import { login, logout, signup } from './actions/session_actions';
import { fetchBusinesses, fetchBusiness } from './actions/business_actions';
import { fetchReviews } from './util/review_api_util';
import configureStore from './store/store';
import Root from './components/root';

//Testing start
window.login = login;
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
  // window.fetchReviews = fetchReviews;
  ReactDOM.render(<Root store={ store } />, root);
});
