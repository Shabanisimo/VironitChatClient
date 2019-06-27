import React, { Component } from 'react';
import Message from '../message/message';
import { connect } from 'react-redux';

class MessageList extends Component {
  render() {
    let id = 0;
    return (
      <ul className="message--list">
        {this.props.messageList.map(message => {
          return (
            <Message
              userToken={message.Sender.token}
              text={message.messageText}
              userName={message.Sender.name}
              userImg={message.Sender.imgUrl}
              date={message.date}
              key={id++}
            />
          );
        })}
      </ul>
    );
  }
}

export default connect(
  messageList => ({
    messageList: messageList.messageList,
  }),
  dispatch => ({})
)(MessageList);
