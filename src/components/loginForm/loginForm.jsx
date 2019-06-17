import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import SocialLogin from '../socialLogin/socialLogin';
import './loginForm.css';

export default class LoginForm extends Component {
  render() {
    return (
      <div className="login-form">
        <form className="login-form--block">
          <input className="login-form--login login-form--input" type="text" />
          <input
            className="login-form--password login-form--input"
            type="password"
          />
          <div>
            <Link to="/registration">Registration</Link>
            <button className="login-form--btn">Sign In</button>
          </div>
        </form>
        <SocialLogin />
      </div>
    );
  }
}
