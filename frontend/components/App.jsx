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
import BusinessShowContainer from './business/business_show_container';
import ReviewIndexContainer from './review/review_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => (
  <div>

    <HeaderContainer />

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route exact path="/businesses" component={BusinessIndexContainer} />
    <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
    <Route exact path="/reviews" component={ReviewIndexContainer} />

  </div>
);

export default App;
