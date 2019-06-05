import React, { Component } from "react";
import SocialLogin from "../socialLogin/socialLogin";
import "./loginForm.css";

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
          <button className="login-form--btn">Sign In</button>
          <a className="login-form-link">Registration</a>
        </form>
        <SocialLogin />
      </div>
    );
  }
}
