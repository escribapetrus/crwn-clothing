import cartActionTypes from "./cartActionTypes";

export const toggleCartShow = () => ({
    type: cartActionTypes.TOGGLE_CART_SHOW
});

export const addToCart = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})

export const decreaseToCart = item => ({
    type: cartActionTypes.DECREASE_ITEM,
    payload: item
})