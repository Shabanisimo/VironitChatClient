export const addUserInfo = userInfo => ({
  type: 'ADD_INFO',
  payload: userInfo,
});

export const removeUserInfo = () => ({
  type: 'DELETE_USER_INFO',
  payload: {},
});
