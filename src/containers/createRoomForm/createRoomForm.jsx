import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from '../../components/userList/userList';
import { asyncCreateRoom } from '../../store/actions/room';
import { asyncLoadUserList } from '../../store/actions/userList';
import './createRoomForm.css';

class CreateRoomForm extends Component {
  constructor() {
    super();

    this.state = {
      roomName: '',
      selectedUsers: [],
    };

    this.onChangeRoomName = this.onChangeRoomName.bind(this);
    this.createRoomQuery = this.createRoomQuery.bind(this);
    this.onChecked = this.onChecked.bind(this);
  }

  onChangeRoomName(event) {
    this.setState({ roomName: event.target.value });
  }

  createRoomQuery(e) {
    e.preventDefault();
    const { asyncCreateRoom } = this.props;
    const { roomName, selectedUsers } = this.state;
    asyncCreateRoom(roomName, selectedUsers);
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

  componentDidMount() {
    const { asyncLoadUserList } = this.props;

    asyncLoadUserList();
  }

  render() {
    const { roomName, selectedUsers } = this.state;

    return (
      <div className="create-room--block">
        <header className="create-room--header">
          <h3 className="create-room--title">Create Room</h3>
        </header>
        <form className="create-room--form">
          <input
            type="text"
            className="create-room--input"
            value={roomName}
            onChange={this.onChangeRoomName}
          />
          <UserList
            selectUser={this.onChecked}
            userList={this.props.userList}
            selectedUsers={selectedUsers}
          />
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

const mapStateToProps = state => {
  return {
    userList: state.userList,
  };
};

export default connect(
  mapStateToProps,
  { asyncLoadUserList, asyncCreateRoom }
)(CreateRoomForm);
