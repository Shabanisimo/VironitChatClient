import React from 'react';

function UserImage({ src }) {
  return (
    <a className="user-img--block">
      <img
        className="user-img"
        src={
          src ||
          'https://cdn2.iconfinder.com/data/icons/user-icon-2-1/100/user_5-15-512.png'
        }
        alt=""
      />
    </a>
  );
}

export default UserImage;
