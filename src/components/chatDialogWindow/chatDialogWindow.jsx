import React, { Component } from "react";
import ChatForm from "../chatForm/chatForm";
import ChatMessageList from "../chatMessageList/chatMessageList";
import "./chatDialogWindow.css";

class ChatDialogWindow extends Component {
  constructor() {
    super();

    this.socket = new WebSocket("ws://localhost:3333");

    this.socket.onclose = () => {
      console.log("Disconnected");
    };

    this.socket.onopen = () => {
      console.log("Connect");
    };

    this.socket.onmessage = msg => {
      let t;
      try {
        t = JSON.parse(msg.data);
        this.setState({
          messages: [...this.state.messages, JSON.parse(msg.data)]
        });
      } catch (error) {
        t = msg.data;
      }
      console.log(t);
    };

    this.state = {
      messages: [],
      client: this.socket
    };
  }

  render() {
    return (
      <div className="chat-dialog-window">
        <ChatMessageList
          className="chat-message-list"
          messages={this.state.messages}
        />
        <ChatForm {...this.state} />
      </div>
    );
  }
}

export default ChatDialogWindow;
