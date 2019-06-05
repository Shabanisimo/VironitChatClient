import React, { Component } from "react";
import LoginForm from "../loginForm/loginForm";
import "./authorisationWindow.css";

export default class AuthorisationWindow extends Component {
  render() {
    return (
      <div className="authorisation-window">
        <LoginForm />
      </div>
    );
  }
}
