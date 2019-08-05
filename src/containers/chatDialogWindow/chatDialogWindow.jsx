import React, { Component } from 'react';
import RoomList from '../../components/roomList/roomList';
import SideMenu from '../../components/sideMenu/sideMenu';
import { connect } from 'react-redux';
import './chatDialogWindow.css';
import { withRouter } from 'react-router-dom';
import Chat from '../../components/chat/chat';
import { asyncGetUserInfo, logOut } from '../../store/actions/user';
import { asyncAddRoomList, changeActiveRoom } from '../../store/actions/room';
import { addSocket, sendMessage } from '../../store/actions/socket';

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
    } = this.props;
    return (
      <div className="chat-dialog-window">
        <SideMenu logOut={this.logOut} />
        <RoomList
          roomList={roomList}
          activeRoom={activeRoom}
          onChangeRoom={changeActiveRoom}
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
      logOut,
      asyncAddRoomList,
      changeActiveRoom,
      addSocket,
      sendMessage,
    }
  )(ChatDialogWindow)
);
