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
    const lastUpadateA = new Date(
      a.Messages.length > 0 ? a.Messages.createdAt : a.createdAt
    );
    const lastUpadateB = new Date(
      b.Messages.length > 0 ? b.Messages.createdAt : b.createdAt
    );
    return lastUpadateA - lastUpadateB;
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
      {/*{roomKeys.map(roomKey => {*/}
      {/*  const lastMessage =*/}
      {/*    roomList[roomKey].Messages.length > 0*/}
      {/*      ? roomList[roomKey].Messages[roomList[roomKey].Messages.length - 1].messageText*/}
      {/*      : null;*/}
      {/*  return (*/}
      {/*    <Room*/}
      {/*      activeRoom={roomList[roomKey].id === activeRoom}*/}
      {/*      image={roomList[roomKey].imgUrl}*/}
      {/*      name={roomList[roomKey].name}*/}
      {/*      key={roomList[roomKey].token}*/}
      {/*      id={roomList[roomKey].id}*/}
      {/*      lastMessage={lastMessage ? lastMessage : null}*/}
      {/*      onChangeRoom={onChangeRoom}*/}
      {/*    />*/}
      {/*  );*/}
      {/*})}*/}
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
