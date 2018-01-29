import React from 'react';
import { Link } from 'react-router-dom';

import SearchForm from '../business/search_form';

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
  let underBar;

  if (props.location.pathname === "/") {
    headerClass = "header-landing";
  } else {
    headerClass = "header-normal";
  }

  if (props.currentUser) {
    headerButtons = (
      <div className="header-button-container">
        <Link to="/" onClick={props.logout}>Log Out</Link>
      </div>
    );
  } else {
    headerButtons =  (
      <div className="header-button-container">
        <Link to="/login" className="lILink">Login</Link>
        <Link to="/signup" className="sULink">Sign Up!</Link>
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
        <h1>Bellow!<Link className="b-link" to="/search"></Link></h1>
        {headerButtons}
        <SearchForm props={props}/>
      </div>
      {underBar}
    </header>
  );
};

export default Header;
