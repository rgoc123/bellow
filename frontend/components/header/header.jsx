import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to='/login'>Login</Link>
    <br></br>
    <Link to='/signup'>Sign Up!</Link>
  </nav>
);

const personalGreeting = (currentUser) => {
  if (currentUser) {
    return (
      <hgroup className="header-group">
        <h2 className="header-name">Welcome, {currentUser.first_name}!</h2>
        <h2>Thanks for visiting! This is it for now, but come back tomorrow for more.</h2>
      </hgroup>
    );
  }
};

const Header = (props) => {
  let headerButtons;
  let headerClass;

  if (props.location.pathname === "/") {
    headerClass = "header-landing";
  } else {
    headerClass = "header-normal";
  }
  if (props.currentUser) {
    headerButtons = (
      <div className="header-button-container">
        <button onClick={props.logout}>Log Out</button>
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
  return (
    <header className={headerClass}>
      <div className="content-container">
        <h1>Bellow!</h1>
        {headerButtons}
      </div>
    </header>
  );
};

export default Header;
