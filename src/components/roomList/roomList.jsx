import React from 'react';
import Room from '../room/room';

function RoomList(props) {
  const { roomList, onChangeRoom, activeRoom } = props;
  const roomKeys = Object.keys(roomList);
  return (
    <div className="room-list--block">
      <ul className="room-list">
        {roomKeys.map(roomKey => {
          return (
            <Room
              activeRoom={activeRoom}
              image={roomList[roomKey].imgUrl}
              name={roomList[roomKey].name}
              key={roomList[roomKey].token}
              id={roomList[roomKey].id}
              onChangeRoom={onChangeRoom}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default RoomList;
