import React, { Component } from "react";
import "./socialLogin.css";
import googleLogo from "../../assets/img/icons8-google.svg";
import facebookLogo from "../../assets/img/icons8-facebook.svg";
import twitterLogo from "../../assets/img/icons8-twitter.svg";
export default class SocialLogin extends Component {
  render() {
    return (
      <div className="social-login--block">
        <p className="social-login--text">Sign in with:</p>
        <ul className="social-login--list">
          <li className="social-login--item">
            <a className="social-login--btn google-btn">
              <img
                className="social-login--img"
                src={googleLogo}
                alt="google-icon"
              />
              GOOGLE
            </a>
          </li>
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
        </ul>
      </div>
    );
  }
}
