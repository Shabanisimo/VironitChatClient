import React, { Component } from 'react';
import LoginForm from '../../components/loginForm/loginForm';
import RegistrationForm from '../../components/registrationForm/registrationForm';
import './authorisationWindow.css';

export default class AuthorisationWindow extends Component {
  componentWillMount() {
    localStorage.getItem('token') ? this.props.history.push('/chat') : null;
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
