import React, { Component } from 'react';
import googleLogo from '../../../assets/img/icons8-google.svg';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { asyncGoogleSignIn } from '../../../store/actions/user';

class GoogleButton extends Component {
  //
  // componentDidMount() {
  //   window.gapi.load('auth2', function() {
  //     window.gapi.auth2.init({ client_id: process.env.REACT_APP_GOOGLE_KEY });
  //   });
  // }

  onSignIn = data => {
    asyncGoogleSignIn(data.Zi.id_token)
      .then(() => this.props.history.push('/chat'))
      .catch(err => console.log('ERROR ', err));
    // GoogleAuth.signIn({ scope: 'profile email' })
    //   .then(user => {
    //     const id_token = user.getAuthResponse().id_token;
    //     asyncGoogleSignIn(id_token);
    //   })
    //   .then(res => this.props.history.push('/chat'))
    //   .catch(err => console.log('ERROR ', err));
  };

  render() {
    return (
      <li className="social-login--item">
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_KEY}
          buttonText="Login"
          onSuccess={this.onSignIn}
          cookiePolicy={'single_host_origin'}
        />
      </li>
    );
  }
}

export default withRouter(connect(null, { asyncGoogleSignIn })(GoogleButton));
