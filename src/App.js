import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Header from "./components/Header"
import './App.css';
import SignIn from './pages/Sign-In';
import {auth, createUserProfileDocument} from "./firebase/utils"
import {createStructuredSelector} from 'reselect';
import {setCurrentUser} from './redux/userAction';
import {selectCurrentUser} from './redux/userSelector';

class App extends React.Component {
  
  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        });
      } else {
        setCurrentUser(userAuth)
      }
      //createUserProfileDocument(user);
      // this.setState({currentUser: user});
      //console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/shop" component={Shop}/>
            <Route exact path="/signin" render={
              () =>
                this.props.currentUser ? (<Redirect to="/"/>)
                : (<SignIn/>)
            }/>
          </Switch>
        </Router>    
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
