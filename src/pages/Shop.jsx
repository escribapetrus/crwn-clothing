import React, { Component } from 'react';
import SHOP_DATA from "../resources/collections";
import CollectionPreview from "../components/Preview-Collection"

class Shop extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state
        return(
            <div>
                {collections
                .map(({id, ...collectionProps}) => (
                    <CollectionPreview key={id} {...collectionProps}/>
                ))}
            </div>
        )
    }
}

export default Shop