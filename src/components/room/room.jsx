import React from 'react';
import RoomImage from '../roomImage/roomImage';

function Room({ id, onChangeRoom, image, name, activeRoom }) {
  return (
    <li
      className={activeRoom ? 'room-item _selected' : 'room-item'}
      onClick={() => onChangeRoom(id)}
    >
      <RoomImage image={image} alt={name} />
      <p className="room-name">{name}</p>
    </li>
  );
}

export default Room;
