import React, { Component } from "react";
import "./notification.css";

export default class Notofication extends Component {
  render() {
    return (
      <li className="message-notification">
        <p className="message-notification--text">{this.props.message}</p>
      </li>
    );
  }
}
