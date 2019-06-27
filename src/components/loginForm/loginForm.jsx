import React, { Component } from 'react';
import { BrowserRouter as Router, Rout, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addUserInfo } from '../../store/actions/userInfoAction';
import request from '../../utils/requests';
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
    const email = this.state.email;
    const password = this.state.password;
    request('user/signin', 'POST', { email, password }).then(data => {
      localStorage.setItem('token', data.token);
      this.props.addUserInfo(data);
      this.props.history.push('/chat');
    });
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
    { addUserInfo }
  )(LoginForm)
);
