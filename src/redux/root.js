import {combineReducers} from "redux";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from "./userReducer";
import cartReducer from './cartReducer';
import menuReducer from './menuReducer';
import shopReducer from './shopReducer' ;

const config = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const root = combineReducers({
    user:   userReducer,
    cart:   cartReducer,
    menu:   menuReducer,
    shop:   shopReducer
})

export default persistReducer(config,root);