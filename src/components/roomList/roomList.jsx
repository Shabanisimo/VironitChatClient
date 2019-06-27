import React, { Component } from 'react';
import Room from '../room/room';

class RoomList extends Component {
  render() {
    return (
      <div className="room-list--block">
        <ul className="room-list">
          {this.props.roomList.map(room => {
            return (
              <Room
                image={room.imgUrl}
                name={room.name}
                key={room.token}
                id={room.id}
                onChangeRoom={this.props.onChangeRoom}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RoomList;
