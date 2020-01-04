import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import root from './root';

const middlewares = [logger];

export const store = createStore(root, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default (store, persistor)