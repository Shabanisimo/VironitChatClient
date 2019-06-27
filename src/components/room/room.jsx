import React, { Component } from 'react';
import RoomImage from '../roomImage/roomImage';

export default class Room extends Component {
  render() {
    return (
      <li
        className="room-item"
        onClick={() => this.props.onChangeRoom(this.props.id)}
      >
        <RoomImage image={this.props.image} alt={this.props.name} />
        <p className="room-name">{this.props.name}</p>
      </li>
    );
  }
}
