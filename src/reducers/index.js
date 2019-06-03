import { combineReducers } from 'redux';
import messageList from './messageList';
import userInfo from './userInfo'; 

export default combineReducers({
    messageList,
    userInfo
})