import React, { Component } from 'react';
import GroupIcon from '../../assets/img/group.svg';
import ExitIcon from '../../assets/img/exit.svg';
import SettingIcon from '../../assets/img/settings.svg';
import LeftArrow from '../../assets/img/left-arrow.svg';
import RightArrow from '../../assets/img/right-arrow.svg';
import SVG from 'react-inlinesvg';

export default class SideMenu extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.onOpen = this.onOpen.bind(this);
  }

  onOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className={this.state.isOpen ? 'side-menu __open' : 'side-menu'}>
        <ul className="side-menu--list">
          <li className="side-menu--item" onClick={this.onOpen}>
            <SVG
              className="side-menu--img"
              src={this.state.isOpen ? LeftArrow : RightArrow}
            />
          </li>
          <li className="side-menu--item">
            {/* <img src={GroupIcon} alt="" className="side-menu--img" /> */}
            <SVG src={GroupIcon} className="side-menu--img" />
            <p className="side-menu--text">Create Room</p>
          </li>
          <li className="side-menu--item">
            <SVG src={SettingIcon} className="side-menu--img" />
            <p className="side-menu--text">Settings</p>
          </li>
          <li className="side-menu--item">
            <SVG src={ExitIcon} className="side-menu--img" />
            <p className="side-menu--text">Log Out</p>
          </li>
        </ul>
      </div>
    );
  }
}
