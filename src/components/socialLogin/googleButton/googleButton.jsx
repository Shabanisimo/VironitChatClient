import React, { Component } from 'react';
import googleLogo from '../../../assets/img/icons8-google.svg';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { asyncGoogleSignIn } from '../../../store/actions/user';

class GoogleButton extends Component {
  componentDidMount() {
    window.gapi.load('auth2', function() {
      window.gapi.auth2.init({ client_id: process.env.REACT_APP_GOOGLE_KEY });
    });
  }

  onSignIn = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    const { asyncGoogleSignIn } = this.props;

    GoogleAuth.signIn({ scope: 'profile email' })
      .then(user => {
        const id_token = user.getAuthResponse().id_token;
        asyncGoogleSignIn(id_token);
      })
      .then(res => console.log('Its okey'))
      .catch(err => console.log('ERROR ', err));
  };

  render() {
    return (
      <li className="social-login--item">
        <a className="social-login--btn google-btn" onClick={this.onSignIn}>
          <img
            className="social-login--img"
            src={googleLogo}
            alt="google-icon"
          />
          GOOGLE
        </a>
      </li>
    );
  }
}

export default withRouter(
  connect(
    null,
    { asyncGoogleSignIn }
  )(GoogleButton)
);
