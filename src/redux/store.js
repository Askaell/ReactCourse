import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {};

const store = createStore(reducers, initialState, composeWithDevTools());

export { store };
