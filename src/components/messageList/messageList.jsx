import React, { Component } from 'react';
import Message from '../message/message';

class MessageList extends Component {
  render() {
    const { room, userId } = this.props;
    const { Users, Messages } = room;
    return (
      <ul className="message--list">
        {Messages.map((message, i, messages) => {
          const { messageText, date, SenderId, id } = message;
          const showImage =
            messages[i + 1] && SenderId === messages[i + 1].SenderId;
          return (
            <Message
              messageText={messageText}
              date={date}
              user={SenderId === userId}
              userInfo={Users[SenderId]}
              showImage={!showImage}
              key={id}
            />
          );
        })}
      </ul>
    );
  }
}

export default MessageList;
