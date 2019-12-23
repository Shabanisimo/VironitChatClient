import React, { Component } from 'react';
import UserItem from '../userItem/userItem';

const UserList = ({ userList, selectedUsers, selectUser }) => {
  return (
    <ul className="user-list">
      {userList &&
        userList.map(user => {
          return (
            <li
              className={
                selectUser && selectedUsers.indexOf(user.token) > -1
                  ? 'user-item--block _selected'
                  : 'user-item--block'
              }
              onClick={() => selectUser && selectUser(user.token)}
              key={user.token}
            >
              <UserItem
                className="user-item"
                name={user.name}
                surname={user.surname}
                imgUrl={user.imgUrl}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default UserList;
