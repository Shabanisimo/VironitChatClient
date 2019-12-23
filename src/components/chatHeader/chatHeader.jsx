import Toolbar from '../toolbar';
import ToolbarButton from '../ToolbarButton';
import React from 'react';
import { connect } from 'react-redux';
import { switchRoomSettingsPopup } from '../../store/actions/interface';

const ChatHeader = ({ chatTitle, switchRoomSettingsPopup }) => {
  return (
    <Toolbar
      title={chatTitle}
      rightItemHandler={switchRoomSettingsPopup}
      rightItems={[
        <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
      ]}
    />
  );
};

export default connect(null, { switchRoomSettingsPopup })(ChatHeader);
