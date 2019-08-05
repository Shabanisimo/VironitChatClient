import React, { Component } from 'react';
import UserItem from '../userItem/userItem';
import './header.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  render() {
    const { imgUrl, name, surname, history } = this.props.userInfo;
    return (
      <header className="header">
        <a className="header--icon" onClick={() => history.push('/chat')}>
          &lt;Noname&#47;&gt;
        </a>
        <UserItem imgUrl={imgUrl} name={name} surname={surname} />
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo.userInfo,
  };
};

export default withRouter(connect(mapStateToProps)(Header));
