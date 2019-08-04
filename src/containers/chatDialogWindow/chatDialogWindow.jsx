import React, { Component } from 'react';
import RoomList from '../../components/roomList/roomList';
import SideMenu from '../../components/sideMenu/sideMenu';
import { connect } from 'react-redux';
import './chatDialogWindow.css';
import { withRouter } from 'react-router-dom';
import Chat from '../../components/chat/chat';
import { asyncGetUserInfo, removeUserInfo } from '../../store/actions/user';
import {
  asyncAddRoomList,
  changeActiveRoom,
  removeRoomList,
} from '../../store/actions/room';
import { addSocket, sendMessage } from '../../store/actions/socket';

class ChatDialogWindow extends Component {
  constructor() {
    super();

    this.onChangeRoom = this.onChangeRoom.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentWillMount() {
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

  onChangeRoom(id) {
    const { changeActiveRoom } = this.props;

    changeActiveRoom(id);
  }

  logOut() {
    const { removeRoomList, removeUserInfo } = this.props;

    removeRoomList();
    removeUserInfo();
    this.props.history.push('/auth');
  }

  render() {
    const { roomList, activeRoom, sendMessage, userId } = this.props;
    return (
      <div className="chat-dialog-window">
        <SideMenu logOut={this.logOut} />
        <RoomList
          roomList={roomList}
          activeRoom={activeRoom}
          onChangeRoom={this.onChangeRoom}
        />
        <div className="chat-block">
          {activeRoom ? (
            <Chat
              onSendMessage={sendMessage}
              userId={userId}
              room={roomList[activeRoom]}
            />
          ) : (
            <div>
              <p>Выберите комнату или создайте новую</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.userInfo.userInfo.id,
    roomList: state.roomList.roomList,
    activeRoom: state.roomList.activeRoom.roomId,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      asyncGetUserInfo,
      removeUserInfo,
      asyncAddRoomList,
      changeActiveRoom,
      removeRoomList,
      addSocket,
      sendMessage,
    }
  )(ChatDialogWindow)
);
