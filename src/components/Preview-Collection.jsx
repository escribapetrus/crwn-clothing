import React from 'react';
import CollectionItem from "./Collection-Item"
import "./Preview-Collection.scss"

function PreviewCollection({title, items, id}) {
    return (
        <div className="Preview-Collection">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...itemProps}) => (
                    <CollectionItem key={id} {...itemProps}/>
                ))}
            </div>
            
        </div>
    )
}

export default PreviewCollection
