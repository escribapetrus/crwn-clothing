import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectCollections} from '../redux/shopSelector'
import PreviewCollection from './Preview-Collection';

import './Overview-Collection.scss'

function OverviewCollection({collections}) {
    return (
        <div className="Overview-Collection">
            {collections
                .map(({id, ...collectionProps}) => (
                    <PreviewCollection key={id} {...collectionProps}/>
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(OverviewCollection)
