import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { asyncGoogleSignIn } from '../../../store/actions/user';

class GoogleButton extends Component {
  componentDidMount() {
    console.log(process.env.REACT_APP_GOOGLE_KEY);
  }

  onSignIn = data => {
    asyncGoogleSignIn(data.Zi.id_token)
      .then(() => this.props.history.push('/chat'))
      .catch(err => console.log('ERROR ', err));
  };

  render() {
    return (
      <li className="social-login--item">
        <GoogleLogin
          clientId={
            '609243307428-u3qbftvmdb9taevc1idfj3p7lpl92bt.apps.googleusercontent.com'
          }
          buttonText="Login"
          onSuccess={this.onSignIn}
          cookiePolicy={'single_host_origin'}
        />
      </li>
    );
  }
}

export default withRouter(connect(null, { asyncGoogleSignIn })(GoogleButton));
