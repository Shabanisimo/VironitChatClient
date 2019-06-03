const initialState = [];

export default function messageList(state = initialState, action) {
    switch(action.type) {
        case 'ADD_MESSAGE': 
            return [...state, action.message];
        case 'REWRITE_STATE': 
            return [...action.messages]
        default:     
            return state;
    }
}
