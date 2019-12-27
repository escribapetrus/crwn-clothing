import {combineReducers} from "redux";
import userReducer from "./userReducer";
import cartReducer from './cartReducer';

const root = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default root;