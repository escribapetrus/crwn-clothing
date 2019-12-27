import React from 'react'
import Button from "./Button"

import "./Cart-Dropdown.scss"

function CartDropdown() {
    return (
        <div className="Cart-Dropdown">
            <div className="cart-items">
                <Button inverted>go to checkout</Button>
            </div>
        </div>
    )
}

export default CartDropdown
