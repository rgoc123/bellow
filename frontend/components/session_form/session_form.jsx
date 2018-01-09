import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      this.props.history.push('/search');
    });
  }

  renderErrors() {
    if (!this.props.errors) {
      return null;
    } else {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li className="errorLI" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  signupForm() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2 className="session_h2">Sign Up for Bellow</h2>
          <br/>
          <div className="login-form">
            <input type="text"
              value={this.first_name}
              onChange={this.update('first_name')}
              className="login-input-name"
              id="fname"
              placeholder="First Name"
            />
            <input type="text"
              value={this.last_name}
              onChange={this.update('last_name')}
              className="login-input-name"
              id="lname"
              placeholder="Last Name"
            />
            <br/>
            <input type="text"
              value={this.email}
              onChange={this.update('email')}
              className="login-input"
              placeholder="Email"
            />
            <br/>
            <input type="password"
              value={this.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
            />
            <br/>
            <input className="session-button" type="submit" value="Sign Up" />
          </div>
        </form>
        Already on Bellow? <Link to='/login'>Log In</Link>
      </div>
    );
  }

  loginForm() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2 className="session_h2">Log In to Bellow</h2>
          <br/>
          <div className="login-form">
              <input type="text"
                value={this.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
              />
            <br/>
            <input type="password"
              value={this.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
            />
          <input className="session-button" type="submit" value="Log In" />
          </div>
        </form>
        New to Bellow? <Link to='/signup'>Sign Up!</Link>
      </div>
    );
  }

  formChoice() {
    if (this.props.formType === 'signup') {
      return this.signupForm();
    } else {
      return this.loginForm();
    }
  }

  render() {
    return (
      <div className="content-container">
        {this.renderErrors()}
        <div className="alpha-container">
          {this.formChoice()}
        </div>
        <div className="bravo-container">

        </div>
      </div>
    );
  }

}

export default withRouter(SessionForm);
