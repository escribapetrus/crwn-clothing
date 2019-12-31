import React from 'react'
import "./Checkout-Item.scss"

function CheckoutItem({item:{name, imageUrl, price, quantity}}) {
    return (
        <div className="Checkout-Item">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    )
}

export default CheckoutItem
