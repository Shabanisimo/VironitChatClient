import React, { Component } from 'react';
import UserImage from '../userImage/userImage';
import './header.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a
          className="header--icon"
          onClick={() => this.props.history.push('/chat')}
        >
          Chat
        </a>
        <div className="header--user-block">
          <UserImage src={this.props.userInfo.picture} />
          <div>
            <p>{this.props.userInfo.name}</p>
          </div>
          <button>Sign Out</button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
  };
};

export default withRouter(connect(mapStateToProps)(Header));
