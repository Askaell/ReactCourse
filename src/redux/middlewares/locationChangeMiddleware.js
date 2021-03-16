import { haveUnreadMessage } from '../actions/chatActions';

const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

export const locationChangeMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case LOCATION_CHANGE: {
            const currentPath = action.payload.location.pathname;
            if (currentPath.indexOf('/chat/') != -1) {
                const chatId = currentPath.slice(currentPath.lastIndexOf('/') + 1);
                if (store.getState().chat.chats[chatId].haveUnreadMessage) {
                    store.dispatch(haveUnreadMessage(chatId));
                }
            }
        }
    }

    return next(action);
};
