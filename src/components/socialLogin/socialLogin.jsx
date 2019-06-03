import React, { Component } from "react";

export default class SocialLogin extends Component {
  render() {
    return (
      <div className="social-login--block">
        <ul className="social-login--list">
          <li className="social-login--item">
            <a className="sicoal-login--google">Google</a>
          </li>
          <li className="social-login--item">
            <a className="sicoal-login--facebook">Facebook</a>
          </li>
          <li className="social-login--item">
            <a className="sicoal-login--twitter">Twitter</a>
          </li>
        </ul>
      </div>
    );
  }
}
