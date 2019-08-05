import React from 'react';
import Room from '../room/room';

function RoomList(props) {
  const { roomList, onChangeRoom, activeRoom } = props;
  const roomKeys = Object.keys(roomList);
  return (
    <div className="room-list--block">
      <ul className="room-list">
        {roomKeys.map(roomKey => {
          const lastMessage =
            roomList[roomKey].Messages.length > 0
              ? roomList[roomKey].Messages[
                  roomList[roomKey].Messages.length - 1
                ].messageText
              : null;

          return (
            <Room
              activeRoom={roomList[roomKey].id === activeRoom}
              image={roomList[roomKey].imgUrl}
              name={roomList[roomKey].name}
              key={roomList[roomKey].token}
              id={roomList[roomKey].id}
              lastMessage={lastMessage ? lastMessage : null}
              onChangeRoom={onChangeRoom}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default RoomList;
