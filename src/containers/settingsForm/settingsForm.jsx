import React, { useState } from 'react';
import { connect } from 'react-redux';
import { switchSettingsPopup } from '../../store/actions/interface';
import { updateUserInfo } from '../../store/actions/user';
import SVG from 'react-inlinesvg';
import ExitIcon from '../../assets/img/exit.svg';
import SettingIcon from '../../assets/img/settings.svg';
import './settingsForm.css';

const SettingsForm = props => {
  const { switchSettingsPopup, logOut, updateUserInfo } = props;
  const [state, setState] = useState({ name: '', surname: '' });

  const changeValue = (key, text) => {
    setState({ ...state, [key]: text });
  };

  const updateUserInfoHandler = () => {
    const { name, surname } = state;
    updateUserInfo(name, surname);
  };

  return (
    <div className="settings-form">
      <div className="settings-form--inner">
        <header className="settings-form--header">
          <h3 className="settings-form--title">Settings Room</h3>
        </header>
        <div className="settings-form--first-form">
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
        </div>
        <div className="settings-form--second-form">
          <ul className="settings-form--list">
            <li className="settings-form--item">
              <label className="settings-form--label">Name</label>
              <input
                className="settings-form--input"
                placeholder="Name"
                id="name"
                type="text"
                value={state.name}
                onChange={e => changeValue('name', e.currentTarget.value)}
              />
            </li>
            <li className="settings-form--item">
              <label className="settings-form--label">Surname</label>
              <input
                className="settings-form--input"
                placeholder="Surname"
                id="surname"
                type="text"
                value={state.surname}
                onChange={e => changeValue('surname', e.currentTarget.value)}
              />
            </li>
          </ul>
        </div>
        <div>
          <button
            className="settings-form--btn"
            onClick={() => switchSettingsPopup()}
          >
            Cancel
          </button>
          <button
            className="settings-form--btn"
            onClick={updateUserInfoHandler}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  switchSettingsPopup,
  updateUserInfo,
})(SettingsForm);
