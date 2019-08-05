import React, { Component } from 'react';
import LoginForm from '../loginForm/loginForm';
import RegistrationForm from '../registrationForm/registrationForm';
import './authorisationWindow.css';

export default class AuthorisationWindow extends Component {
  componentDidMount() {
    localStorage.getItem('token') && this.props.history.push('/chat');
  }

  render() {
    return (
      <div className="authorisation-window">
        {location.pathname === '/auth' ? (
          <LoginForm />
        ) : location.pathname === '/reg' ? (
          <RegistrationForm />
        ) : null}
      </div>
    );
  }
}
