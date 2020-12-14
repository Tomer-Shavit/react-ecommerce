import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component'
import SignUpAndSignIn from './components/pages/sign-up-and-sign-in/sign-up-and-sign-in.component'
import Header from './components/header/header.component'

function App() {
  return(
  <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/sign-in' component={SignUpAndSignIn}/>
    </Switch>
  </div>
  ) 
};  


export default App;
