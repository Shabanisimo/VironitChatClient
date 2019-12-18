import React from 'react';

function RoomImage({ image, name }) {
  return (
    <div>
      <img
        className="room-image"
        src={
          image
            ? image
            : 'https://cdn3.iconfinder.com/data/icons/e-commerce-8/91/group-512.png'
        }
        alt={name}
      />
    </div>
  );
}

export default RoomImage;
