import React, { Component } from 'react';
import RoomList from '../../components/roomList/roomList';
import SideMenu from '../../components/sideMenu/sideMenu';
import ChatHeader from '../../components/chatHeader/chatHeader';
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
      <div className="messenger">
        {/*<SideMenu logOut={this.logOut} />*/}
        <div className="scrollable sidebar">
          <RoomList
            roomList={roomList}
            activeRoom={activeRoom.roomId}
            onChangeRoom={changeActiveRoom}
          />
        </div>
        <div className="scrollable content">
          <ChatHeader
            chatTitle={activeRoom.roomId && roomList[activeRoom.roomId].name}
          />
          {activeRoom.roomId ? (
            <Chat
              onSendMessage={sendMessage}
              userId={userId}
              room={roomList[activeRoom.roomId]}
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
    activeRoom: state.roomList.activeRoom,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    asyncGetUserInfo,
    logOut,
    asyncAddRoomList,
    changeActiveRoom,
    addSocket,
    sendMessage,
  })(ChatDialogWindow)
);
