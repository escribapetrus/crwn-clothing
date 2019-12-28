import React from 'react';
import Button from "./Button";
import CartItem from "./Cart-Item";
import {selectCartItems} from '../redux/cartSelector'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import "./Cart-Dropdown.scss";

function CartDropdown({cartItems}) {
    return (
        <div className="Cart-Dropdown">
            <div className="cart-items">
                {cartItems.map(cartItem => (
                   <CartItem 
                    key={cartItem.id}
                    item={cartItem}/> 
                ))}
            </div>
            <Button inverted>go to checkout</Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)
