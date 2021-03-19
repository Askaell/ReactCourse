import { haveUnreadMessage } from '../actions/chatActions';

const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

export const locationChangeMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case LOCATION_CHANGE: {
            const currentPath = action.payload.location.pathname;
            if (currentPath.includes('/chat/')) {
                const chatId = currentPath.slice(currentPath.lastIndexOf('/') + 1);
                setTimeout(() => {
                    if (store.getState().chat.chats[chatId].haveUnreadMessage) {
                        store.dispatch(haveUnreadMessage(chatId));
                    }
                }, 500);
            }
        }
    }

    return next(action);
};
