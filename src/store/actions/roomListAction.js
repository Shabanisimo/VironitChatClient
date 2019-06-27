export const addRoomList = roomList => ({
  type: 'UPDATE_ROOMS',
  payload: roomList,
});

export const deleteRoomList = () => ({
  type: 'DELETE_ROOMS',
  payload: {},
});
