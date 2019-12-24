import request from '../../utils/requests';
import {
  getItemFromStorage,
  setItemToStorage,
  removeItemFromStorage,
} from '../../utils/localStorage';
import { removeRoomList } from './room';
import { disablePopups } from './interface';

const addUserInfo = userInfo => ({
  type: 'ADD_INFO',
  payload: userInfo,
});

export const removeUserInfo = () => ({
  type: 'DELETE_USER_INFO',
});

export const logOut = () => dispatch =>
  removeItemFromStorage('token').then(() => {
    dispatch(removeUserInfo());
    dispatch(removeRoomList());
    dispatch(disablePopups());
  });

export const asyncGetUserInfo = () => dispatch => {
  getItemFromStorage('token').then(token => {
    request('user/getInfo', 'POST', { token })
      .then(data => dispatch(addUserInfo(data)))
      .catch(err => console.log(err));
  });
};

export const asyncAuthorization = (email, password) => dispatch =>
  request('user/signin', 'POST', { email, password }).then(data => {
    if (!data.error) {
      setItemToStorage('token', data.token);
      dispatch(addUserInfo(data));
      return true;
    }
    return false;
  });

export const asyncGoogleSignIn = async token => dispatch =>
  request('user/signin/google', 'POST', { token })
    .then(data => {
      setItemToStorage('token', data[0].token);
      dispatch(addUserInfo(data[0]));
    })
    .catch(err => console.log(`ERROR ${err}`));

export const asyncRegistration = (name, surname, email, password) => dispatch =>
  request('user/registration', 'POST', {
    name,
    surname,
    email,
    password,
  }).then(data => {
    if (!data.error) {
      setItemToStorage('token', data.token);
      dispatch(addUserInfo(data));
      return true;
    }
    return false;
  });

export const updateUserInfo = (name, surname) => (dispatch, getState) => {
  const {
    userInfo: { token, id },
    userInfo,
  } = getState().userInfo;
  return request('user/updateUserInfo', 'PUT', {
    name,
    surname,
    token,
  }).then(data => {
    const { name, surname } = data;
    userInfo.name = name;
    userInfo.surname = surname;
    userInfo.id = id;
    dispatch(addUserInfo(userInfo));
  });
};
