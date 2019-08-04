import React from 'react';

function RoomImage({ image, name }) {
  return (
    <div>
      <img className="room-image" src={image} alt={name} />
    </div>
  );
}

export default RoomImage;
