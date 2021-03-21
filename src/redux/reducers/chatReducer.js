import 'lodash';

import {
    ADD_CHAT,
    HAVE_UNREAD_MESSAGE,
    DELETE_CHAT,
    START_CHATS_LOADING,
    SUCCESS_CHATS_LOADING,
    ERROR_CHATS_LOADING,
} from '../actions/chatActions';
import { deleteChatMessages } from '../actions/messageActions';

const initialState = {
    currentPath: '/',
    chats: {},
    isLoading: false,
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_CHATS_LOADING: {
            return {
                ...state,
                isLoading: false,
                chats: action.payload,
            };
        }
        case ERROR_CHATS_LOADING: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case START_CHATS_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case HAVE_UNREAD_MESSAGE: {
            const chats = state.chats || {};
            const currentChat = chats[action.payload.chatId];

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
            let chats = state.chats || [];
            console.log(_);
            chats = _.omit(chats, [action.payload.chatId]);

            return {
                ...state,
                chats: {
                    ...chats,
                },
            };
        }
        case '@@router/LOCATION_CHANGE': {
            return {
                ...state,
                currentPath: action.payload.location.pathname,
            };
        }
        default:
            return state;
    }
};
