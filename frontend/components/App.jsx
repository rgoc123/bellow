import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import HeaderContainer from './header/header_container';
import SessionFormContainer from './session_form/session_form_container';
import BusinessIndexContainer from './business/business_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => (
  <div>

    <HeaderContainer />

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route exact path="/" component={BusinessIndexContainer} />

  </div>
);

export default App;
