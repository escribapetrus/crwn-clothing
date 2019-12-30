import React from 'react';
import Button from "./Button";
import CartItem from "./Cart-Item";
import {selectCartItems} from '../redux/cartSelector'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import "./Cart-Dropdown.scss";

function CartDropdown({cartItems, history}) {
    return (
        <div className="Cart-Dropdown">
            <div className="cart-items">
                {
                cartItems.length ? 
                    cartItems.map(cartItem => (
                        <CartItem 
                            key={cartItem.id}
                            item={cartItem}/> 
                    ))
                : 
                    <span className="empty-message ">Your cart is empty.</span>
                }
            </div>
            <Button onClick={() => history.push('/checkout')} inverted>go to checkout</Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
