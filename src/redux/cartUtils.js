export const addItemToCart = (cartItems, selected) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === selected.id
    );
    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === selected.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    } else {
        return [...cartItems, {...selected, quantity: 1}]
    }    
}

export const decreaseItemToCart = (cartItems, selected) => {
    const existing = cartItems.find(
        cartItem => cartItem.id === selected.id
    );
    if(existing.quantity === 1) {
        return cartItems.filter(cartItem => (
            cartItem.id !== selected.id
        ))    
    } else {
        return cartItems.map(cartItem => (
            cartItem.id === selected.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        ))
    }
}