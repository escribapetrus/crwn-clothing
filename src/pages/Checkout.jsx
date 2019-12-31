import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from "../redux/cartSelector"
import "./Checkout.scss"
import CheckoutItem from '../components/Checkout-Item';

function Checkout({cartItems, total}){
    return (
        <div className="Checkout">
            <div className="checkout-header">
                <div className="header-block">
                    <span>product</span>
                </div>
                <div className="header-block">
                    <span>description</span>
                </div>
                <div className="header-block">
                    <span>qty</span>
                </div>
                <div className="header-block">
                    <span>price</span>
                </div>
                <div className="header-block">
                    <span>remove</span>
                </div>
            </div>
            <div className="cart-items">
                { cartItems.map(item => (
                    <CheckoutItem key={item.id} item={item}/>
                ))}
            </div>
            <div className="total">
                <span>total: ${total}</span>
            </div>            
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout)