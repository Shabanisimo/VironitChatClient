import React, { Component } from "react";
import ChatMessage from "../chatMessage/chatMessage";
import "./chatMessageList.css";
import Notification from "../notification/notofication";

class ChatMessageList extends Component {
  render() {
    let id = 0;
    return (
      <ul className="chat-message--list">
        {this.props.messages.map(message => {
          if (message.type === 1) {
            return (
              <ChatMessage
                text={message.text}
                userName={message.sender}
                date={message.date}
                key={id++}
              />
            );
          } else return <Notification message={message.text} key={id++} />;
        })}
      </ul>
    );
  }
}

export default ChatMessageList;