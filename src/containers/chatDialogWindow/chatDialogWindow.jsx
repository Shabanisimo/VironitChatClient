import React, { Component } from 'react';
import RoomList from '../../components/roomList/roomList';
import { connect } from 'react-redux';
import './chatDialogWindow.css';
import { withRouter } from 'react-router-dom';
import Chat from '../../components/chat/chat';
import { asyncGetUserInfo, logOut } from '../../store/actions/user';
import { asyncAddRoomList, changeActiveRoom } from '../../store/actions/room';
import { addSocket, sendMessage } from '../../store/actions/socket';
import CreateRoomFrom from '../../containers/createRoomForm/createRoomForm';
import SettingsForm from '../../containers/settingsForm/settingsForm';
import RoomSettingsForm from '../roomSettingsPopup/roomSettingsForm';

class ChatDialogWindow extends Component {
  constructor() {
    super();

    this.loadUserInfo = this.loadUserInfo.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    localStorage.getItem('token')
      ? this.loadUserInfo()
      : this.props.history.push('/auth');
  }

  loadUserInfo() {
    const { asyncGetUserInfo, asyncAddRoomList, addSocket } = this.props;

    asyncGetUserInfo();
    asyncAddRoomList();
    addSocket();
  }

  logOut() {
    const { logOut } = this.props;

    logOut();
    this.props.history.push('/auth');
  }

  render() {
    const {
      roomList,
      activeRoom,
      sendMessage,
      userId,
      changeActiveRoom,
      popupState,
      settingsPopupState,
      roomSettingsPopupState,
    } = this.props;
    return (
      <div className="messenger">
        <div className="scrollable sidebar">
          <RoomList
            roomList={roomList}
            activeRoom={activeRoom.roomId}
            onChangeRoom={changeActiveRoom}
          />
        </div>
        <div className="scrollable content">
          {activeRoom.roomId ? (
            <Chat
              onSendMessage={sendMessage}
              userId={userId}
              room={roomList[activeRoom.roomId]}
              roomName={roomList[activeRoom.roomId].name}
            />
          ) : (
            <div className="disabledChat">
              <p>Выберите комнату или создайте новую</p>
            </div>
          )}
        </div>
        {popupState && <CreateRoomFrom />}
        {settingsPopupState && <SettingsForm logOut={() => this.logOut()} />}
        {roomSettingsPopupState && activeRoom.roomId && (
          <RoomSettingsForm userList={roomList[activeRoom.roomId].Users} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.userInfo.userInfo.id,
    roomList: state.roomList.roomList,
    activeRoom: state.roomList.activeRoom,
    popupState: state.appInterface.popup,
    settingsPopupState: state.appInterface.settingsPopup,
    roomSettingsPopupState: state.appInterface.roomSettingsPopup,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    asyncGetUserInfo,
    asyncAddRoomList,
    changeActiveRoom,
    addSocket,
    sendMessage,
    logOut,
  })(ChatDialogWindow)
);
