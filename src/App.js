import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import CategoryPage from './components/categoryPage/CategoryPage';
import ProductPage from './components/productPage/ProductPage';
import './styles/App.scss';

function App() {

 

  return (
    <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/:category' exact component={CategoryPage}/>
            <Route path='/category/:product' exact component={ProductPage}/>
          </Switch>
        </div>
    </Router>
  
  );
}

export default App;
