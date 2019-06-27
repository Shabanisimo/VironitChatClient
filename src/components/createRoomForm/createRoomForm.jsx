import React, { Component } from 'react';
import { connect } from 'react-redux';
import './createRoomForm.css';
import request from '../../utils/requests';
import UserList from '../userList/userList';

class CreateRoomForm extends Component {
  constructor() {
    super();

    this.state = {
      roomName: '',
      userList: [],
      selectedUsers: [],
    };

    this.onChangeRoomName = this.onChangeRoomName.bind(this);
    this.createRoomQuery = this.createRoomQuery.bind(this);
    this.onChecked = this.onChecked.bind(this);
    this.getUserList = this.getUserList.bind(this);
    this.onChecked = this.onChecked.bind(this);
  }

  onChangeRoomName(event) {
    this.setState({ roomName: event.target.value });
  }

  createRoomQuery(e) {
    e.preventDefault();
    let data = {};
    data.name = this.state.roomName;
    data.users = [...this.state.selectedUsers, localStorage.getItem('token')];
    request('room/createRoom', 'POST', data)
      .then(data => this.props.onUpdateRoomList(data))
      .catch(err => console.log(err));
  }

  getUserList() {
    request('user/getUserList', 'GET').then(data => {
      this.setState({
        userList: [
          ...data.filter(u => u.token !== localStorage.getItem('token')),
        ],
      });
      console.log(this.state.userList);
    });
  }

  onChecked(token) {
    if (this.state.selectedUsers.indexOf(token) === -1) {
      this.setState({
        selectedUsers: [...this.state.selectedUsers, token],
      });
    } else {
      this.setState({
        selectedUsers: [...this.state.selectedUsers.filter(t => t !== token)],
      });
    }
  }

  componentWillMount() {
    this.getUserList();
  }

  render() {
    return (
      <div className="create-room--block">
        <header className="create-room--header">
          <h3 className="create-room--title">Create Room</h3>
        </header>
        <form className="create-room--form">
          <input
            type="text"
            className="create-room--input"
            value={this.state.roomName}
            onChange={this.onChangeRoomName}
          />
          <UserList handler={this.onChecked} userList={this.state.userList} />
          <button className="create-room--btn" onClick={this.props.togglePopup}>
            Cancel
          </button>
          <button className="create-room--btn" onClick={this.createRoomQuery}>
            Create
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateRoomList: roomList => {
      dispatch({ type: 'UPDATE_ROOMS', payload: roomList });
    },
  };
};

export default connect(mapDispatchToProps)(CreateRoomForm);
