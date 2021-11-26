import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppProvider from './components/appContext/App.context';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import CategoryPage from './components/categoryPage/CategoryPage';
import ProductPage from './components/productPage/ProductPage';
import Checkout from './components/checkout/Checkout';
import './styles/App.scss';

function App() {

 

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppProvider>
          <div className="App">
            <Nav/>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/checkout' exact component={Checkout}/>
              <Route path='/:category' exact component={CategoryPage}/>
              <Route path='/category/:product' exact component={ProductPage}/>
            </Switch>
          </div>
        </AppProvider>
    </Router>
  
  );
}

export default App;
