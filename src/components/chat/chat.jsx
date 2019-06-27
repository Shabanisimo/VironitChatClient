import React, { Component } from 'react';
import ChatForm from '../chatForm/chatForm';
import MessageList from '../messageList/messageList';
import withScroll from '../../hoc/withScroll/withScroll';

const MessageListWithScroll = withScroll(MessageList);

export default class Chat extends Component {
  render() {
    return (
      <div className="chat">
        <MessageListWithScroll className="chat-message-list" />
        <ChatForm onSendMessage={this.props.onSendMessage} />
      </div>
    );
  }
}
