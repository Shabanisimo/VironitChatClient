import React from 'react';
import Room from '../room/room';
import RoomSearch from '../RoomSearch/RoomSearch';
import Toolbar from '../toolbar';
import { connect } from 'react-redux';
import {
  switchPopup,
  switchSettingsPopup,
} from '../../store/actions/interface';
import ToolbarButton from '../ToolbarButton';
import moment from 'moment';

function RoomList(props) {
  const {
    roomList,
    onChangeRoom,
    activeRoom,
    switchPopup,
    switchSettingsPopup,
  } = props;
  const roomKeys = Object.keys(roomList);
  const rooms = roomKeys.map(key => {
    return roomList[key];
  });
  rooms.sort((a, b) => {
    const lastUpadateA = moment(
      a.Messages.length > 0
        ? a.Messages[a.Messages.length - 1].createdAt
        : a.createdAt
    );
    const lastUpadateB = moment(
      b.Messages.length > 0
        ? b.Messages[b.Messages.length - 1].createdAt
        : b.createdAt
    );
    return lastUpadateB - lastUpadateA;
  });

  return (
    <div className="conversation-list">
      <Toolbar
        title="Messenger"
        leftItems={[<ToolbarButton key="cog" icon="ion-ios-cog" />]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />,
        ]}
        leftItemHandler={() => switchSettingsPopup()}
        rightItemHandler={() => switchPopup()}
      />
      <RoomSearch />
      {rooms.map(room => {
        const lastMessage =
          room.Messages.length > 0
            ? room.Messages[room.Messages.length - 1].messageText
            : null;
        return (
          <Room
            activeRoom={room.id === activeRoom}
            image={room.imgUrl}
            name={room.name}
            key={room.token}
            id={room.id}
            lastMessage={lastMessage ? lastMessage : null}
            onChangeRoom={onChangeRoom}
          />
        );
      })}
    </div>
  );
}

export default connect(null, { switchPopup, switchSettingsPopup })(RoomList);
