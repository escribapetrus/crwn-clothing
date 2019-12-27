import React from 'react'
import {connect} from 'react-redux';
import {toggleCartShow} from '../redux/cartAction'

import {ReactComponent as Icon} from "../assets/shopping-bag.svg"
import "./Cart-Icon.scss"

function CartIcon({toggleCartShow}) {
    return (
        <div className="Cart-Icon" onClick={toggleCartShow}>
           <Icon className="shopping-icon"/>
           <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartShow: () => dispatch(toggleCartShow())
})

export default connect(null, mapDispatchToProps)(CartIcon)
