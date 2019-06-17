import React, { Component } from 'react';
import UserImage from '../userImage/userImage';
import './chatMessage.css';

class ChatMessage extends Component {
  render() {
    return (
      <li className="chat-message--item">
        <UserImage />
        <div className="message-info">
          <p className="user-name">{this.props.userName}</p>
          <p className="message-text">{this.props.text}</p>
        </div>
        <p className="message-date">{this.props.date}</p>
      </li>
    );
  }
}

export default ChatMessage;
