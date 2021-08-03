import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import './styles/App.scss';

function App() {
  return (
    <Router>
        <div className="App">
        {/* <div className='blure blure--active'></div> */}
          <Nav/>
          <Home/>
        </div>
    </Router>
  
  );
}

export default App;
