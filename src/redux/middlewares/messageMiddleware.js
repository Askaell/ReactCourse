import { SEND_MESSAGE } from '../actions/messageActions';
import { haveUnreadMessage } from '../actions/chatActions';

export const messageMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const currentPath = store.getState().chat.currentPath;
            if ('/chat/' + action.payload.chatId !== currentPath) {
                store.dispatch(haveUnreadMessage(action.payload.chatId));
            }
        }
    }

    return next(action);
};
