import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {shopSelector} from '../redux/shopSelector'
import PreviewCollection from './Preview-Collection';

import './Overview-Collection.scss'

function OverviewCollection({shop}) {
    return (
        <div className="Overview-Collection">
            {shop
                .map(({id, ...collectionProps}) => (
                    <PreviewCollection key={id} {...collectionProps}/>
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    shop: shopSelector
})

export default connect(mapStateToProps)(OverviewCollection)
