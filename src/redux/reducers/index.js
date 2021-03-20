import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { messagesReducer } from './messagesReducer';
import { chatReducer } from './chatReducer';
import { profileReducer } from './profileReducer';

export default (history) =>
    combineReducers({
        router: connectRouter(history),
        messages: messagesReducer,
        chat: chatReducer,
        profile: profileReducer,
    });
