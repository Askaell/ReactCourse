import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './reducers';
import middlewares from './middlewares';

const initialState = {};

const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['chat', 'profile'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), ...middlewares))
);

const persistor = persistStore(store);

export { store, persistor, history };
