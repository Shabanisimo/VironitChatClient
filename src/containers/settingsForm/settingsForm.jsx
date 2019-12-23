import React from 'react';
import { connect } from 'react-redux';
import { switchSettingsPopup } from '../../store/actions/interface';
import SVG from 'react-inlinesvg';
import ExitIcon from '../../assets/img/exit.svg';
import SettingIcon from '../../assets/img/settings.svg';
import './settingsForm.css';

const SettingsForm = props => {
  const { switchSettingsPopup, logOut } = props;

  return (
    <div className="settings-form">
      <div className="settings-form--inner">
        <header className="settings-form--header">
          <h3 className="settings-form--title">Settings Room</h3>
        </header>
        <ul className="settings-form--list">
          <li className="settings-form--item">
            <SVG src={SettingIcon} className="settings-form--img" />
            <p className="settings-form--text">Settings</p>
          </li>
          <li className="settings-form--item" onClick={() => logOut()}>
            <SVG src={ExitIcon} className="settings-form--img" />
            <p className="settings-form--text">Log Out</p>
          </li>
        </ul>
        <div>
          <button
            className="settings-form--btn"
            onClick={() => switchSettingsPopup()}
          >
            Cancel
          </button>
          <button className="settings-form--btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  switchSettingsPopup,
})(SettingsForm);
