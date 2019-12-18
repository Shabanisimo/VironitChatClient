import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToolbarButton from '../ToolbarButton';
import Compose from '../compose/compose';

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
      <div>
        <Compose
          onChange={this.onChangeMessageText}
          onSend={this.onSend}
          value={this.state.messageText}
          rightItems={[
            <ToolbarButton key="photo" icon="ion-ios-camera" />,
            <ToolbarButton key="image" icon="ion-ios-image" />,
            <ToolbarButton key="audio" icon="ion-ios-mic" />,
            <ToolbarButton key="money" icon="ion-ios-card" />,
            <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
            <ToolbarButton key="emoji" icon="ion-ios-happy" />,
          ]}
        />
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
