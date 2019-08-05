import React from 'react';
import UserImage from '../userImage/userImage';

function UserItem({ imgUrl, name, surname }) {
  return (
    <div className="user-item">
      <UserImage src={imgUrl} />
      <div className="user-item--info ">
        <p className="user-tem--name">{name}</p>
        <p className="user-tem--surname">{surname}</p>
      </div>
    </div>
  );
}

export default UserItem;
