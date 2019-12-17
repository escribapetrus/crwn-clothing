import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Header from "./components/Header"
import './App.css';
import SignIn from './pages/Sign-In';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/signin" component={SignIn}/>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
