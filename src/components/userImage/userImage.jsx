import React, { Component } from "react";
import "./userImage.css";

export default class UserImage extends Component {
  render() {
    return (
      <a className="user-img--block">
        <img
          className="user-img"
          src="https://sun9-28.userapi.com/c633927/v633927462/2e806/2UEvNAmEG4M.jpg"
          alt=""
        />
      </a>
    );
  }
}
