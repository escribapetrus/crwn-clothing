import {combineReducers} from "redux";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from "./userReducer";
import cartReducer from './cartReducer';

const config = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const root = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default persistReducer(config,root);