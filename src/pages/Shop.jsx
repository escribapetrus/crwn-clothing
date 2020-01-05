import React from 'react';
import { Route } from 'react-router-dom';
import OverviewCollection from '../components/Overview-Collection';
import Collection from './Collection'

function Shop({match}){
    console.log(match)
    return(
        <div className="Shop">
            <Route exact path={`${match.path}`}
            component={OverviewCollection}/>
            <Route path={`${match.path}/:id`}
            component={Collection}/>
        </div>
    )
}

export default Shop