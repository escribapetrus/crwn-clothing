import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../redux/cartAction'
import "./Collection-Item.scss"
import Button from './Button'

function CollectionItem({item, addToCart}) {
    const {name, price, imageUrl} = item;
    return (
        <div className="Collection-Item">
            <div 
            className="image"
            style={{backgroundImage:`url(${imageUrl})`}}
            />
            <div className="collection-footer">
                <h2 className="name">{name}</h2>
                <h3 className="price">{price}</h3>
            </div>
            <Button onClick={()=>addToCart(item)} inverted>
                add to cart
            </Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
