import React, { Component } from 'react';
import googleLogo from '../../../assets/img/icons8-google.svg';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class GoogleButton extends Component {
  queryToServer = token => {
    const myInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    };
    fetch('http://localhost:3040/api/signin', myInit)
      .then(res => res.json())
      .then(data => this.props.onUpdateUser(data))
      .then(this.props.history.push('/chat'));
  };

  componentDidMount() {
    window.gapi.load('auth2', function() {
      window.gapi.auth2
        .init({ client_id: process.env.REACT_APP_GOOGLE_KEY })
        .then(() => {
          console.log('Init OK');
        });
    });
  }

  onSignIn = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn({ scope: 'profile email' })
      .then(user => {
        const id_token = user.getAuthResponse().id_token;
        this.queryToServer(id_token);
      })
      .then(res => console.log('Its okey'))
      .catch(err => console.log('Init NOT ok ', err));
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

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateUser: userInfo => {
      dispatch({ type: 'ADD_INFO', payload: userInfo });
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GoogleButton)
);
