import React, { Component } from 'react';
import './userImage.css';

export default class UserImage extends Component {
  render() {
    return (
      <a className="user-img--block">
        <img className="user-img" src={this.props.src || ''} alt="" />
      </a>
    );
  }
}
