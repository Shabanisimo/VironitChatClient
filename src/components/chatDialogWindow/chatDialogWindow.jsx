import React, { Component } from "react";
import io from "socket.io-client";
import ChatForm from "../chatForm/chatForm";
import ChatMessageList from "../chatMessageList/chatMessageList";
import "./chatDialogWindow.css";

class ChatDialogWindow extends Component {
  constructor() {
    super();

    this.socket = io.connect("http://localhost:3020");

    this.socket.on("connect", () => {
      console.log("Connect");
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected");
    });

    this.socket.on("msg", msg => {
      this.setState({
        messages: [...this.state.messages, msg]
      });
    });

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
