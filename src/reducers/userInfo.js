const initialState = {};

export default function userInfo(state = initialState, action) {
    switch(action.type) {
        case 'ADD_INFO': 
            return { ...action.userInfo };
        default:
            return state;
    }
}