import React from 'react';
import { connect } from 'react-redux';
import { switchRoomSettingsPopup } from '../../store/actions/interface';
import './roomSettingsForm.css';
import UserList from '../../components/userList/userList';

const RoomSettingsForm = props => {
  const { switchRoomSettingsPopup, userList } = props;

  return (
    <dialog className="room-settings-form">
      <div className="room-settings-form--inner">
        <header className="room-settings-form--header">
          <h3 className="room-settings-form--title">Settings Room</h3>
        </header>
        <UserList userList={userList} />
        <div>
          <button
            className="room-settings-form--btn"
            onClick={switchRoomSettingsPopup}
          >
            Cancel
          </button>
          <button className="room-settings-form--btn">Save</button>
        </div>
      </div>
    </dialog>
  );
};

const mapStateToProps = state => {
  return {
    userList: state.roomList.roomList[state.roomList.activeRoom.roomId].Users,
  };
};

export default connect(null, {
  switchRoomSettingsPopup,
})(RoomSettingsForm);
