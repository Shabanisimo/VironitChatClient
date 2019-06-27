import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChatForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageText: '',
    };

    this.onChangeMessageText = this.onChangeMessageText.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  onChangeMessageText(e) {
    this.setState({
      messageText: e.target.value,
    });
  }

  onSend(e) {
    e.preventDefault();
    this.props.onSendMessage(this.state.messageText);
    this.setState({
      messageText: '',
    });
  }

  render() {
    return (
      <div className="chat-form--block">
        <form onSubmit={this.handleFormSubmit} className="chat-form">
          <textarea
            ref="message"
            className="chat-form--input"
            onChange={this.onChangeMessageText}
            value={this.state.messageText}
          />
          <button className="chat-form--btn" onClick={this.onSend}>
            Send message
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  messageList => ({
    messageList: messageList,
  }),
  null
)(ChatForm);
