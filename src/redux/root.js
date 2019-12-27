import {combineReducers} from "redux";
import userReducer from "./userReducer"

const root = combineReducers({
    user: userReducer,
})

export default root;