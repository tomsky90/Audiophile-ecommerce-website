import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Headphones from './components/headphones/Headphones'
import './styles/App.scss';

function App() {
  return (
    <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/headphones' component={Headphones}/>
          </Switch>
        </div>
    </Router>
  
  );
}

export default App;
