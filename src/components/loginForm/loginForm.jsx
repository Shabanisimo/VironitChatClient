import React, { Component } from 'react';
import { BrowserRouter as Router, Rout, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { asyncAuthorization } from '../../store/actions/user';
import SocialLogin from '../socialLogin/socialLogin';
import './loginForm.css';

class LoginForm extends Component {
  constructor() {
    super();

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.logIn = this.logIn.bind(this);

    this.state = {
      email: undefined,
      password: undefined,
    };
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  logIn(e) {
    e.preventDefault();

    const { asyncAuthorization, history } = this.props;
    const { email, password } = this.state;

    asyncAuthorization(email, password).then(() => history.push('/chat'));
  }

  render() {
    return (
      <div className="login-form">
        <form className="login-form--block">
          <label>Email</label>
          <input
            className="login-form--login login-form--input"
            type="email"
            onChange={this.onChangeEmail}
            required
          />
          <label>Password</label>
          <input
            className="login-form--password login-form--input"
            type="password"
            onChange={this.onChangePassword}
            required
          />
          <div>
            <Link to="/reg">Registration</Link>
            <button className="login-form--btn" onClick={this.logIn}>
              Sign In
            </button>
          </div>
        </form>
        <SocialLogin />
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { asyncAuthorization }
  )(LoginForm)
);
