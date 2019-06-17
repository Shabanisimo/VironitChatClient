import React, { Component } from 'react';

export default class RoomImage extends Component {
  render() {
    return (
      <div>
        <img
          className="room-image"
          src={this.props.image}
          alt={this.props.name}
        />
      </div>
    );
  }
}
