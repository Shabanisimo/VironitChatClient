import React, { Component } from 'react';
import facebookLogo from '../../../assets/img/icons8-facebook.svg';

export default class FacebookButton extends Component {
  render() {
    return (
      <li className="social-login--item">
        <a className="social-login--btn facebook-btn">
          <img
            className="social-login--img"
            src={facebookLogo}
            alt="facebook-icon"
          />
          FACEBOOK
        </a>
      </li>
    );
  }
}
