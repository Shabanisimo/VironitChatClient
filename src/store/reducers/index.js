import { combineReducers } from 'redux';
import userInfo from './user';
import roomList from './room';
import socket from './socket';
import userList from './userList';
import appInterface from './interface';

export default combineReducers({
  userInfo,
  roomList,
  socket,
  userList,
  appInterface,
});
