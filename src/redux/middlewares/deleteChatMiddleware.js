import { deleteChatMessages } from '../actions/messageActions';
import { DELETE_CHAT } from '../actions/chatActions';

export const deleteChatMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case DELETE_CHAT: {
            store.dispatch(deleteChatMessages(action.payload.chatId));
        }
    }

    return next(action);
};
