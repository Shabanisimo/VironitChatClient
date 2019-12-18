import React, { useEffect } from 'react';
import shave from 'shave';
import RoomImage from '../roomImage/roomImage';

export default function Room(props) {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  });

  const { image, name, activeRoom, lastMessage, onChangeRoom, id } = props;

  return (
    <div className="conversation-list-item" onClick={() => onChangeRoom(id)}>
      <RoomImage image={image} alt={name} />
      <div className="conversation-info">
        <h1 className="conversation-title">{name}</h1>
        <p className="conversation-snippet">{lastMessage}</p>
      </div>
    </div>
  );
}
