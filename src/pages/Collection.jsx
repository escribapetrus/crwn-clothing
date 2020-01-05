import React from 'react'
import {connect} from 'react-redux'
import {collectionSelector} from '../redux/shopSelector'
import CollectionItem from '../components/Collection-Item';

import './Collection.scss'

function Collection({collection}) {
    const {title, items} = collection;
    return (
        <div className='Collection'>
            <h2 className='title'>{title}</h2>
            <div className="items">
                {items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => ({
    collection: collectionSelector(ownProps.match.params.id)(state)
})

export default connect(mapStateToProps)(Collection)
