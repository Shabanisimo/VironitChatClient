const initialState = [];

export default function roomList(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_ROOMS':
      return [...action.payload];
    case 'DELETE_ROOMS':
      return [];
    default:
      return state;
  }
}
