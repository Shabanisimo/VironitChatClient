import React, { Component } from 'react';
import UserItem from '../userItem/userItem';

export default class UserList extends Component {
  render() {
    return (
      <ul className="user-list">
        {this.props.userList.map(user => {
          return (
            <li
              className="user-item--block"
              onClick={() => this.props.handler(user.token)}
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
