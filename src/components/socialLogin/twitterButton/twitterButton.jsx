import React, { Component } from 'react';
import twitterLogo from '../../../assets/img/icons8-twitter.svg';

export default class TwitterButton extends Component {
  render() {
    return (
      <li className="social-login--item">
        <a className="social-login--btn twitter-btn">
          <img
            className="social-login--img"
            src={twitterLogo}
            alt="twitter-icon"
          />
          TWITTER
        </a>
      </li>
    );
  }
}
