import React from 'react'
import "./Checkout-Item.scss"
import {connect} from 'react-redux'
import {removeItem, addToCart, decreaseToCart} from "../redux/cartAction"

function CheckoutItem({item, remove, add, decrease}) {
    const {name, quantity, price, imageUrl} = item
    return (
        <div className="Checkout-Item">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decrease(item)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => add(item)}>&#10095;</div>    
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => remove(item)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    remove: item => dispatch(removeItem(item)),
    add: item => dispatch(addToCart(item)),
    decrease: item => dispatch(decreaseToCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
