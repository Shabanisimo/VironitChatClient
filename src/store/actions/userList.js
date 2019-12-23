import request from '../../utils/requests';

const loadUserList = userList => ({
  type: 'LOAD_USERLIST',
  payload: userList,
});

export const removeUserList = () => ({
  type: 'REMOVE_USERLIST',
});

export const asyncLoadUserList = () => (dispatch, getState) => {
  request('user/getUserList', 'GET').then(data => {
    const {
      userInfo: { token },
    } = getState().userInfo;
    data = data.filter(user => user.token !== token);
    dispatch(loadUserList(data));
  });
};
