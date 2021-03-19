import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT, HAVE_UNREAD_MESSAGE, DELETE_CHAT } from '../actions/chatActions';

const initialState = {
    currentPath: '/',
    chats: {
        0: { chatName: 'frist chat', haveUnreadMessage: true },
    },
    messages: {
        0: [{ text: 'Hello from redux', author: 'Robot' }],
    },
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case '@@router/LOCATION_CHANGE': {
            return {
                ...state,
                currentPath: action.payload.location.pathname,
            };
        }
        case HAVE_UNREAD_MESSAGE: {
            const chats = state.chats || {};
            const currentChat = chats[action.payload.chatId];

            // if (chats[action.payload.chatId].haveUnreadMessage) {
            return {
                ...state,
                chats: {
                    ...chats,
                    [action.payload.chatId]: {
                        ...currentChat,
                        haveUnreadMessage: !chats[action.payload.chatId].haveUnreadMessage,
                    },
                },
            };
            // } else {
            //     return {
            //         ...state,
            //     };
            // }
        }
        case ADD_CHAT: {
            const chats = state.chats || [];

            return {
                ...state,
                chats: {
                    ...chats,
                    [action.payload.chatId]: {
                        chatName: action.payload.chatName,
                        haveUnreadMessage: false,
                    },
                },
            };
        }
        case DELETE_CHAT: {
            const chats = state.chats || [];
            delete chats[action.payload.chatId];

            const previouseMessages = state.messages || [];
            delete previouseMessages[action.payload.chatId];

            return {
                ...state,
                chats: {
                    ...chats,
                },
                messages: {
                    ...previouseMessages,
                },
            };
        }
        case SEND_MESSAGE: {
            const previouseMessages = state.messages[action.payload.chatId] || [];

            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: [
                        ...previouseMessages,
                        {
                            text: action.payload.text,
                            author: action.payload.author,
                        },
                    ],
                },
            };
        }
        default:
            return state;
    }
};
