import { SEND_MESSAGE } from '../actions/messageActions';

const initialState = {
    messages: {
        0: [{ text: 'Hello from redux', author: 'robot' }],
    },
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
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
