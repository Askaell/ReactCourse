import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from '../actions/chatActions';

const initialState = {
    chats: [{ chatId: 0, chatName: 'frist chat' }],
    messages: {
        0: [{ text: 'Hello from redux', author: 'Robot' }],
    },
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            const chats = state.chats || [];

            return {
                ...state,
                chats: [
                    ...chats,
                    {
                        chatId: action.payload.chatId,
                        chatName: action.payload.chatName,
                    },
                ],
            };
        }
        case SEND_MESSAGE: {
            const previouseMessages =
                state.messages[action.payload.chatId] || [];

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
