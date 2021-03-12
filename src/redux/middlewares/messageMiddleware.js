import { SEND_MESSAGE, sendMessage } from '../actions/messageActions';

export const messageMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.payload.author === 'You') {
                setTimeout(() => {
                    store.dispatch(
                        sendMessage('I am just a robot', 'Robot', action.payload.chatId)
                    );
                }, 3000);
            }
        }
    }

    return next(action);
};
