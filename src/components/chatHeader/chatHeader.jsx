import Toolbar from '../toolbar';
import ToolbarButton from '../ToolbarButton';
import React from 'react';

const ChatHeader = ({ chatTitle }) => {
  return (
    <Toolbar
      title={chatTitle}
      rightItems={[
        <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
        <ToolbarButton key="video" icon="ion-ios-videocam" />,
        <ToolbarButton key="phone" icon="ion-ios-call" />,
      ]}
    />
  );
};

export default ChatHeader;
