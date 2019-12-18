import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Header from "./components/Header"
import './App.css';
import SignIn from './pages/Sign-In';

import {auth} from "./firebase/utils"

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }
  
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/signin" component={SignIn}/>
          </Switch>
        </Router>    
      </div>
    );
  }
}

export default App;
