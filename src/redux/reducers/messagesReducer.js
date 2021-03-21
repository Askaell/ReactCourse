import 'lodash';

import {
    SEND_MESSAGE,
    DELETE_CHAT_MESSAGES,
    START_MESSAGES_LOADING,
    SUCCESS_MESSAGES_LOADING,
    ERROR_MESSAGES_LOADING,
} from '../actions/messageActions';

const initialState = {
    messages: {},
    isLoading: false,
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_MESSAGES_LOADING: {
            return {
                ...state,
                isLoading: false,
                messages: action.payload,
            };
        }
        case ERROR_MESSAGES_LOADING: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case START_MESSAGES_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }
        // case UPLOAD_MESSAGES: {
        //     return {
        //         ...state,
        //         messages: action.payload.messages,
        //     };
        // }
        case DELETE_CHAT_MESSAGES: {
            let previouseMessages = state.messages || {};
            previouseMessages = _.omit(previouseMessages, [action.payload.chatId]);

            return {
                ...state,
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
