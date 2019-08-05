import React from 'react';
import RoomImage from '../roomImage/roomImage';

function Room({ id, onChangeRoom, image, name, activeRoom, lastMessage }) {
  return (
    <li
      className={activeRoom ? 'room-item _selected' : 'room-item'}
      onClick={() => onChangeRoom(id)}
    >
      <RoomImage image={image} alt={name} />
      <div className="room-info">
        <p className="room-name">{name}</p>
        <p className="room-last-message">{lastMessage}</p>
      </div>
    </li>
  );
}

export default Room;
