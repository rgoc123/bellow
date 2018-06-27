import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import SearchForm from '../business/search_form';
import NewSearchContainer from '../business/new_search_container';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to='/login'>Login</Link>
    <br></br>
    <Link to='/signup'>Sign Up!</Link>
  </nav>
);

const Header = (props) => {

  let headerButtons;
  let headerClass;
  let bLinkClass;
  let underBar;

  if (props.location.pathname === "/") {
    bLinkClass = "b-link-landing";
    headerClass = "header-landing";
  } else {
    bLinkClass = "b-link-normal";
    headerClass = "header-normal";
  }

  if (props.currentUser) {
    headerButtons = (
      <div className="header-button-container">
        <Link id="logout" to="/" onClick={props.logout}>Log Out</Link>
        <div id="new-logout">
          <img src={props.currentUser.image} />
          <span><i class="fa fa-sort-down"></i></span>
        </div>
      </div>
    );
  } else {
    headerButtons =  (
      <div className="header-button-container">
        <Link to="/signup" className="sULink">Sign Up!</Link>
        <Link to="/login" className="lILink">Log In</Link>
      </div>
    );
  }

  if (headerClass === "header-normal") {
    underBar = (
      <div className="underbar"></div>
    );
  } else {
    underBar = null;
  }

  return (
    <header className={headerClass}>
      <div className="content-container">
        <h1>Bellow!<Link className={bLinkClass} to="/"></Link></h1>
        <div className="header-mobile-search">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <div className="header-mobile-menu">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <MuiThemeProvider>
          <NewSearchContainer className="search-biz-input-landing" props={props} />
        </MuiThemeProvider>
        {headerButtons}

      </div>
      {underBar}
    </header>
  );
};

export default Header;
