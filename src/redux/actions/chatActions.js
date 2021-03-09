export const ADD_CHAT = '@@chat/ADD_CHAT';

export const addChat = (chatId, chatName) => ({
    type: ADD_CHAT,
    payload: {
        chatId,
        chatName,
    },
});
