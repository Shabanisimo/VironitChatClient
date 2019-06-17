import React, { Component } from 'react';
import './socialLogin.css';
import GoogleButton from './googleButton/googleButton';
import FacebookButton from './facebookButton/facebookButton';
import TwitterButton from './twitterButton/twitterButton';

export default class SocialLogin extends Component {
  render() {
    return (
      <div className="social-login">
        <p className="social-login--text">Sign in with:</p>
        <ul className="social-login--list">
          <GoogleButton />
          <FacebookButton />
          <TwitterButton />
        </ul>
      </div>
    );
  }
}
