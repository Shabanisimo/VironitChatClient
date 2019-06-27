import React, { Component } from 'react';
import UserImage from '../userImage/userImage';

class Message extends Component {
  constructor() {
    super();

    this.state = {
      user: localStorage.getItem('token'),
    };
  }

  render() {
    return (
      <li className="message-item">
        <div
          className={
            this.state.user === this.props.userToken
              ? 'message-block __user'
              : 'message-block'
          }
        >
          <UserImage src={this.props.userImg} />
          <div className="message-info">
            <p className="user-name">{this.props.userName}</p>
            <p className="message-text">{this.props.text}</p>
          </div>
          <p className="message-date">{this.props.date}</p>
        </div>
      </li>
    );
  }
}

export default Message;
