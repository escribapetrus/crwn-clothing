import cartActionTypes from "./cartActionTypes"
import {addItemToCart} from "./cartUtils"

const INITIAL_STATE = {
    show: false,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_SHOW:
            return {
                ...state,
                show: !state.show
            };
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };        
        default:
            return state;
    }
}

export default cartReducer;