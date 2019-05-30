import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <div className="login-form">
        <form className="login-form--block">
          <input className="login-form--login" />
          <input className="login-form--password" />
          <button className="login-form--btn" />
        </form>
      </div>
    );
  }
}
