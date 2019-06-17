import { combineReducers } from 'redux';
import messageList from './messageList';
import userInfo from './userInfo';
import roomList from './roomList';

export default combineReducers({
  messageList,
  userInfo,
  roomList,
});
