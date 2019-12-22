const initialState = {
  popup: false,
  settingsPopup: false,
};

export default function appInterface(state = initialState, action) {
  switch (action.type) {
    case 'SWITCH_POPUP':
      return {
        ...state,
        popup: !state.popup,
        settingsPopup: false,
      };
    case 'SWITCH_SETTINGS_POPUP':
      return {
        ...state,
        popup: false,
        settingsPopup: !state.settingsPopup,
      };
    default:
      return state;
  }
}
