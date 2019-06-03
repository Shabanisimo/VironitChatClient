import React, { Component } from "react";
import io from "socket.io-client";
import ChatForm from "../chatForm/chatForm";
import ChatMessageList from "../chatMessageList/chatMessageList";
import { connect } from "react-redux";
import "./chatDialogWindow.css";

class ChatDialogWindow extends Component {
  constructor() {
    super();

    this.socket = io.connect("http://localhost:3010");

    this.socket.on("connect", () => {
      console.log("Connect");
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected");
    });

    this.socket.on("msg", msg => {
      this.props.onAddMessage(msg);
    });

    this.socket.on("changeRoom", msgArray => {
      this.props.onRewriteMessages(msgArray);
      console.log(this.props.messageList);
    });

    this.state = {
      client: this.socket
    };
  }

  render() {
    return (
      <div className="chat-dialog-window">
        <ChatMessageList className="chat-message-list" />
        <ChatForm {...this.state} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messageList: state.messageList,
    userInfo: state.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddMessage: msg => {
      dispatch({ type: "ADD_MESSAGE", message: msg });
    },
    onRewriteMessages: msgArray => {
      dispatch({ type: "REWRITE_STATE", messages: msgArray });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatDialogWindow);
