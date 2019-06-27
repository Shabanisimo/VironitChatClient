import React, { Component } from 'react';
import googleLogo from '../../../assets/img/icons8-google.svg';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addUserInfo } from '../../../store/actions/userInfoAction';
import request from '../../../utils/requests';

class GoogleButton extends Component {
  queryToServer = token => {
    request(`user/signin/google`, 'POST', { token })
      .then(data => {
        localStorage.setItem('token', data[0].token);
        this.props.addUserInfo(data[0]);
        this.props.history.push('/chat');
      })
      .catch(err => console.log('ERROR ' + err));
  };

  componentDidMount() {
    window.gapi.load('auth2', function() {
      window.gapi.auth2.init({ client_id: process.env.REACT_APP_GOOGLE_KEY });
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

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { addUserInfo }
  )(GoogleButton)
);
