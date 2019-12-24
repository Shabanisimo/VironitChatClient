import React, { useState } from 'react';
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
  const [roomName, setRoomName] = useState('');

  const {
    roomList,
    onChangeRoom,
    activeRoom,
    switchPopup,
    switchSettingsPopup,
  } = props;

  const roomKeys = Object.keys(roomList);

  const momentFunc = room => {
    return moment(
      room.Messages.length > 0
        ? room.Messages[room.Messages.length - 1].createdAt
        : room.createdAt
    );
  };

  let rooms = roomKeys.map(key => {
    return roomList[key];
  });

  rooms = rooms
    .filter(room => {
      if (
        roomName !== '' &&
        room.name.toLowerCase().search(RegExp(roomName.toLocaleLowerCase())) < 0
      ) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      const lastUpadateA = momentFunc(a);
      const lastUpadateB = momentFunc(b);
      return lastUpadateB - lastUpadateA;
    });

  return (
    <div className="conversation-list">
      <Toolbar
        title="&lt;Noname&#47;&gt;"
        leftItems={[<ToolbarButton key="cog" icon="ion-ios-cog" />]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />,
        ]}
        leftItemHandler={() => switchSettingsPopup()}
        rightItemHandler={() => switchPopup()}
      />
      <RoomSearch value={roomName} onChange={setRoomName} />
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
