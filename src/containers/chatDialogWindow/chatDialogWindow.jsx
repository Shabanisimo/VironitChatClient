import React, { Component } from 'react';
import io from 'socket.io-client';
import RoomList from '../../components/roomList/roomList';
import SideMenu from '../../components/sideMenu/sideMenu';
import { connect } from 'react-redux';
import './chatDialogWindow.css';
import { withRouter } from 'react-router-dom';
import Chat from '../../components/chat/chat';
import {
  addUserInfo,
  removeUserInfo,
} from '../../store/actions/userInfoAction';
import {
  addRoomList,
  deleteRoomList,
} from '../../store/actions/roomListAction';
import { addMessage, rewriteMessages } from '../../store/actions/messageAction';
import request from '../../utils/requests';

class ChatDialogWindow extends Component {
  constructor() {
    super();

    this.state = {
      client: this.socket,
      room: undefined,
      token: localStorage.getItem('token'),
    };

    this.socket = io.connect('http://localhost:3030');

    this.socket.on('connect', () => {
      console.log('Connect');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected');
    });

    // this.socket.on('changeRoom', msgArray => {
    //   this.props.rewriteMessages(msgArray);
    //   console.log(this.props.messageList);
    // });

    this.socket.on('message.sent', msg => {
      this.props.addMessage(msg);
      console.log(msg);
    });

    this.socket.emit('conn', { token: this.state.token });

    this.onChangeRoom = this.onChangeRoom.bind(this);
    this.logOut = this.logOut.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentWillMount() {
    localStorage.getItem('token')
      ? this.loadUserInfo()
      : this.props.history.push('/auth');
  }

  loadUserInfo() {
    const token = this.state.token;
    request('user/getInfo', 'POST', { token })
      .then(data => this.props.addUserInfo(data))
      .catch(err => console.log(err));
    request('room/getList', 'POST', { token })
      .then(data => this.props.addRoomList(data))
      .catch(err => console.log(err));
  }

  onChangeRoom(id) {
    this.socket.emit('changeRoom', { id });
    request(`message/load`, 'POST', { id: id }).then(data => {
      this.props.rewriteMessages(data);
      this.setState({
        room: id,
      });
    });
  }

  sendMessage(messageText) {
    let data = {
      msg: messageText,
      userToken: this.state.token,
      roomId: this.state.room,
    };
    this.socket.emit('message.send', data);
  }

  logOut() {
    localStorage.removeItem('token');
    this.props.removeUserInfo();
    this.props.deleteRoomList();
    this.props.history.push('/auth');
  }

  render() {
    return (
      <div className="chat-dialog-window">
        <SideMenu logOut={this.logOut} />
        <RoomList
          roomList={this.props.roomList}
          onChangeRoom={this.onChangeRoom}
        />
        <div className="chat-block">
          {this.state.room ? (
            <Chat onSendMessage={this.sendMessage} />
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
    messageList: state.messageList,
    userInfo: state.userInfo,
    roomList: state.roomList,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      addUserInfo,
      removeUserInfo,
      deleteRoomList,
      addRoomList,
      addMessage,
      rewriteMessages,
    }
  )(ChatDialogWindow)
);
