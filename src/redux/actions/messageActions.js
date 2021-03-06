import { getJSON, RSAA } from 'redux-api-middleware';

export const START_MESSAGES_LOADING = '@@message/START_MESSAGES_LOADING';
export const SUCCESS_MESSAGES_LOADING = '@@message/SUCCESS_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING = '@@message/ERROR_MESSAGES_LOADING';
export const loadMessages = () => ({
    [RSAA]: {
        endpoint: '/api/messages.json',
        method: 'GET',
        types: [
            START_MESSAGES_LOADING,
            {
                type: SUCCESS_MESSAGES_LOADING,
                payload: (action, state, res) => getJSON(res).then((data) => data),
            },
            ERROR_MESSAGES_LOADING,
        ],
    },
});

// export const UPLOAD_MESSAGES = '@@message/UPLOAD_MESSAGES';
// export const uploadMessages = (messages) => ({
//     type: UPLOAD_MESSAGES,
//     payload: messages,
// });

export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const sendMessage = (text, author, chatId) => ({
    type: SEND_MESSAGE,
    payload: {
        text,
        author,
        chatId,
    },
});

export const DELETE_CHAT_MESSAGES = '@@message/DELETE_CHAT_MESSAGES';
export const deleteChatMessages = (chatId) => ({
    type: DELETE_CHAT_MESSAGES,
    payload: {
        chatId,
    },
});
