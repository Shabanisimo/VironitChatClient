const initialState = {
  popup: false,
  settingsPopup: false,
  roomSettingsPopup: false,
};

export default function appInterface(state = initialState, action) {
  switch (action.type) {
    case 'SWITCH_POPUP':
      return {
        ...state,
        popup: !state.popup,
        settingsPopup: false,
        roomSettingsPopup: false,
      };
    case 'SWITCH_SETTINGS_POPUP':
      return {
        ...state,
        popup: false,
        settingsPopup: !state.settingsPopup,
        roomSettingsPopup: false,
      };
    case 'SWITCH_ROOM_SETTINGS_POPUP':
      return {
        ...state,
        popup: false,
        settingsPopup: false,
        roomSettingsPopup: !state.roomSettingsPopup,
      };
    case 'DISABLE_ALL_POPUPS':
      return {
        ...state,
        popup: false,
        settingsPopup: false,
        roomSettingsPopup: false,
      };
    default:
      return state;
  }
}
