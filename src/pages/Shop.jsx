import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import OverviewCollection from '../components/Overview-Collection';
import Collection from './Collection';
import {connect} from 'react-redux';
import {updateCollections} from '../redux/shopActions';
import withSpinner from '../components/Spinner';
import {firestore, convertSnapShotToMap} from '../firebase/utils';

const OverviewWithSpinner = withSpinner(OverviewCollection);
const CollectionWithSpinner = withSpinner(Collection)

class Shop extends Component{
    constructor(props) {
        super(props);    
        this.state = {
             loading: true
        }
    }
    
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertSnapShotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false})
        })

        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
        //     const collectionsMap = convertSnapShotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false})
        // })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return(
            <div className="Shop">
                <Route exact path={`${match.path}`}
                render={(props) => 
                    (<OverviewWithSpinner isLoading={loading} {...props}/>)}/>
                <Route path={`${match.path}/:id`}
                render={(props)=> 
                    (<CollectionWithSpinner isLoading={loading} {...props}/>)}/>
            </div>
        )
    }    
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: collectionsMap => {
        dispatch(updateCollections(collectionsMap))
    }  
})

export default connect(null, mapDispatchToProps)(Shop)