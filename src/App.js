import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Header from "./components/Header"
import './App.css';

const Hats = () => (
  <div>
    <h1>Hats</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/hats" component={Hats}/>
          <Route path="/shop" component={Shop}/>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
