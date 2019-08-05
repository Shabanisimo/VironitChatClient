import React, { Component } from 'react';
import GroupIcon from '../../assets/img/group.svg';
import ExitIcon from '../../assets/img/exit.svg';
import SettingIcon from '../../assets/img/settings.svg';
import RightArrow from '../../assets/img/right-arrow.svg';
import SVG from 'react-inlinesvg';
import CreateRoomFrom from '../../containers/createRoomForm/createRoomForm';

export default class SideMenu extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      showPopup: false,
    };

    this.onOpen = this.onOpen.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  onOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  render() {
    return (
      <div className={this.state.isOpen ? 'side-menu __open' : 'side-menu'}>
        <ul className="side-menu--list">
          <li className="side-menu--item" onClick={this.onOpen}>
            <SVG
              className={
                this.state.isOpen
                  ? 'side-menu--img arrow_open'
                  : 'side-menu--img arow'
              }
              src={RightArrow}
            />
          </li>
          <li className="side-menu--item" onClick={this.togglePopup}>
            <SVG src={GroupIcon} className="side-menu--img" />
            <p className="side-menu--text">Create Room</p>
          </li>
          <li className="side-menu--item">
            <SVG src={SettingIcon} className="side-menu--img" />
            <p className="side-menu--text">Settings</p>
          </li>
          <li className="side-menu--item" onClick={this.props.logOut}>
            <SVG src={ExitIcon} className="side-menu--img" />
            <p className="side-menu--text">Log Out</p>
          </li>
        </ul>
        {this.state.showPopup ? (
          <CreateRoomFrom togglePopup={this.togglePopup} />
        ) : null}
      </div>
    );
  }
}
