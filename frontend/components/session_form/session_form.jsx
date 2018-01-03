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

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  signupForm() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Sign Up for Bellow
          <br/>

          <div className="login-form">
            <label>First Name:
              <input type="text"
                value={this.first_name}
                onChange={this.update('first_name')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Last Name:
              <input type="text"
                value={this.last_name}
                onChange={this.update('last_name')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Email:
              <input type="text"
                value={this.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="text"
                value={this.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    );
  }

  loginForm() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Log In to Bellow
          <br/>

          <div className="login-form">
            <label>Email:
              <input type="text"
                value={this.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="text"
                value={this.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <input type="submit" value="Log In" />
          </div>
        </form>
      </div>
    );
  }

  render() {
    if (this.props.formType === 'signup') {
      return this.signupForm();
    } else {
      return this.loginForm();
    }
  }

}

export default withRouter(SessionForm);
