import React from 'react';
import ChatForm from '../chatForm/chatForm';
import MessageList from '../messageList/messageList';
import withScroll from '../../hoc/withScroll/withScroll';
import ChatHeader from '../chatHeader/chatHeader';
import ToolbarButton from '../ToolbarButton';

const MessageListWithScroll = withScroll(MessageList);

const Chat = props => {
  const { onSendMessage, room, userId, roomName } = props;
  return (
    <div className="messenger-inner">
      <ChatHeader chatTitle={roomName} />
      <MessageListWithScroll
        className="chat-message-list"
        room={room}
        userId={userId}
      />
      <ChatForm
        activeRoom={room}
        onSendMessage={onSendMessage}
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
};

export default Chat;
