import React from 'react'
import "./Collection-Item.scss"

function CollectionItem({name, price, imageUrl}) {
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
        </div>
    )
}

export default CollectionItem
