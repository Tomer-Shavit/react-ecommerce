import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SignUpAndSignIn from './components/pages/sign-up-and-sign-in/sign-up-and-sign-in.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      'currentUser':null
    }
  };
  
  unsubscribeFromAuth = null;
  
  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      this.setState({currentUser: user});
      //console.log(user);
      createUserProfileDocument(user);
    })
  };

  componentWillUnmount=()=>{
    this.unsubscribeFromAuth();
  }

  render() {
    return(
    <div>
      <Header user={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/sign-in' component={SignUpAndSignIn}/>
      </Switch>
    </div>
    ) 
  };
};  


export default App;
