import React from 'react'
import {connect} from 'react-redux';
import {toggleCartShow} from '../redux/cartAction'
import {selectCartItemsCount} from '../redux/cartSelector'

import {ReactComponent as Icon} from "../assets/shopping-bag.svg"
import "./Cart-Icon.scss"

function CartIcon({toggleCartShow, itemCount}) {
    return (
        <div className="Cart-Icon" onClick={toggleCartShow}>
           <Icon className="shopping-icon"/>
           <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartShow: () => dispatch(toggleCartShow())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
