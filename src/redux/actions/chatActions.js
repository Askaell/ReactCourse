import { getJSON, RSAA } from 'redux-api-middleware';

export const START_CHATS_LOADING = '@@message/START_CHATS_LOADING';
export const SUCCESS_CHATS_LOADING = '@@message/SUCCESS_CHATS_LOADING';
export const ERROR_CHATS_LOADING = '@@message/ERROR_CHATS_LOADING';
export const loadChats = () => ({
    [RSAA]: {
        endpoint: '/api/chats.json',
        method: 'GET',
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res).then((data) => data),
            },
            ERROR_CHATS_LOADING,
        ],
    },
});

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
