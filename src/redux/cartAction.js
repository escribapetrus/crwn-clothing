import cartActionTypes from "./cartActionTypes";

export const toggleCartShow = () => ({
    type: cartActionTypes.TOGGLE_CART_SHOW
});

export const addToCart = item => ({
    type: "ADD_ITEM",
    payload: item
})
