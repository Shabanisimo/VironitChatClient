const initialState = {};

export default function userInfo(state = initialState, action) {
  switch (action.type) {
    case 'ADD_INFO':
      return { ...action.payload };
    case 'DELETE_USER_INFO':
      return {};
    default:
      return state;
  }
}
