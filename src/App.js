import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home';
import CarCollection from './components/CarCollection/CarCollection';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact  path='/' component={Home}/>
          <Route path='/cars/:carId' component={ CarCollection }/>   
        </Switch>
      </div>
    </Router>
  );
}

export default App;
