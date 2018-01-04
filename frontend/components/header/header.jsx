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

const Header = ({ currentUser, logout }) => {
  let headerButtons;
  if (currentUser) {
    headerButtons = (
      <div className="header-button-container">
        <button onClick={logout}>Log Out</button>
      </div>
    )
  } else {
    headerButtons =  (
      <div className="header-button-container">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up!</Link>
      </div>
    )
  }
  return (
    <header>
      <div>
        <h1>Bellow!</h1>
        {headerButtons}
      </div>
    </header>
  );
};

export default Header;
