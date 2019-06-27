const initialState = [];

export default function messageList(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.payload];
    case 'REWRITE_MESSAGES':
      return [...action.payload];
    default:
      return state;
  }
}
