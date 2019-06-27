import React, { Component } from 'react';
import UserItem from '../userItem/userItem';
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
          &lt;Noname&#47;&gt;
        </a>
        <UserItem
          imgUrl={this.props.userInfo.imgUrl}
          name={this.props.userInfo.name}
          surname={this.props.userInfo.surname}
        />
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
