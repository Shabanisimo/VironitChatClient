import React, { Component } from 'react';
import './userImage.css';

function UserImage({ src }) {
  return (
    <a className="user-img--block">
      <img className="user-img" src={src || ''} alt="" />
    </a>
  );
}

export default UserImage;
