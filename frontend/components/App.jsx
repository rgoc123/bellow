import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => (
  <div>

    <header>

      <div>
        <h1>Bellow!</h1>
        <GreetingContainer />
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up!</Link>
      </div>

    </header>


    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
