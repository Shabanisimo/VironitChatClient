import React, { Component } from 'react';
import UserItem from '../userItem/userItem';

export default class UserList extends Component {
  render() {
    const { userList, selectedUsers, selectUser } = this.props;
    return (
      <ul className="user-list">
        {userList &&
          userList.map(user => {
            return (
              <li
                className={
                  selectedUsers.indexOf(user.token) > -1
                    ? 'user-item--block _selected'
                    : 'user-item--block'
                }
                onClick={() => selectUser(user.token)}
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
  }
}
