import React, { Component } from 'react';
import UserImage from '../userImage/userImage';

export default class UserItem extends Component {
  render() {
    return (
      <div className="user-item">
        <UserImage src={this.props.imgUrl} />
        <div className="user-item--info ">
          <p className="user-tem--name">{this.props.name}</p>
          <p className="user-tem--surname">{this.props.surname}</p>
        </div>
      </div>
    );
  }
}
