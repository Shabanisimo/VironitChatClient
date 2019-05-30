import React, { Component } from "react";

class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let message = this.refs.message.value;
    this.props.client.send(message);
  }

  render() {
    return (
      <div className="chat-form--block">
        <form onSubmit={this.handleFormSubmit} className="chat-form">
          <textarea ref="message" className="chat-form--input" />
          <button className="chat-form--btn">Send message</button>
        </form>
      </div>
    );
  }
}

export default ChatForm;
