import React from 'react';
import ReactDom from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import { store, persistor, history } from './redux/store';

import { App } from './components/App';

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </ConnectedRouter>
    </Provider>,
    document.querySelector('#root')
);
