import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/user';
import { switchSettingsPopup } from '../../store/actions/interface';
import SVG from 'react-inlinesvg';
import ExitIcon from '../../assets/img/exit.svg';
import SettingIcon from '../../assets/img/settings.svg';
import './settingsForm.css';

const SettingsForm = props => {
  const { switchSettingsPopup, logOut } = props;

  return (
    <div className="create-room--block">
      <header className="create-room--header">
        <h3 className="create-room--title">Settings Room</h3>
      </header>
      <ul className="side-menu--list">
        <li className="side-menu--item">
          <SVG src={SettingIcon} className="side-menu--img" />
          <p className="side-menu--text">Settings</p>
        </li>
        <li className="side-menu--item" onClick={() => logOut()}>
          <SVG src={ExitIcon} className="side-menu--img" />
          <p className="side-menu--text">Log Out</p>
        </li>
      </ul>
      <div>
        <button className="create-room--btn" onClick={switchSettingsPopup}>
          Cancel
        </button>
        <button className="create-room--btn">Save</button>
      </div>
    </div>
  );
};

export default connect(null, {
  switchSettingsPopup,
  logOut,
})(SettingsForm);
