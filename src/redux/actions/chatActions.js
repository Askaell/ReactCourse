export const ADD_CHAT = '@@chat/ADD_CHAT';
export const addChat = (chatId, chatName) => ({
    type: ADD_CHAT,
    payload: {
        chatId,
        chatName,
    },
});

export const DELETE_CHAT = '@@chat/DELETE_CHAT';
export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: {
        chatId,
    },
});

export const HAVE_UNREAD_MESSAGE = '@@chat/HAVE_UNREAD_MESSAGE';
export const haveUnreadMessage = (chatId) => ({
    type: HAVE_UNREAD_MESSAGE,
    payload: {
        chatId,
    },
});
