import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderContainer from './header/header_container';
import SessionFormContainer from './session_form/session_form_container';
import SearchContainer from './business/search_container';
import BusinessIndexContainer from './business/business_index_container';
import BusinessShowContainer from './business/business_show_container';
import HotBusinesses from './business/hot_businesses';
import ReviewIndexContainer from './review/review_index_container';
import ReviewFormContainer from './review/review_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NewSearchContainer from './business/new_search_container';
import UserProfileContainer from './user/user_profile_container';
import FooterContainer from './header/footer_container';

const App = () => (
  <div className="app-container">

    <HeaderContainer />

    <Route exact path="/" component={HotBusinesses} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route exact path="/search" component={SearchContainer} />
    <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
    <Route path="/reviews" component={ReviewIndexContainer} />
    <Route exact path="/businesses/:businessId/reviews" component={ReviewIndexContainer} />
    <Route exact path="/businesses/:businessId/reviews/new" component={ReviewFormContainer} />
    <Route exact path="/businesses/:businessId/reviews/:reviewId/edit" component={ReviewFormContainer} />
    <Route path="/reviews/:reviewId" component={ReviewIndexContainer} />
    <Route path="/users/:userId" component={UserProfileContainer} />

    <FooterContainer />

  </div>
);

export default App;
