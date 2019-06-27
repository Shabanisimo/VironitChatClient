export const addMessage = message => ({
  type: 'ADD_MESSAGE',
  payload: message,
});

export const rewriteMessages = messages => ({
  type: 'REWRITE_MESSAGES',
  payload: messages,
});
