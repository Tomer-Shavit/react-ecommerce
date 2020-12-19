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
    // When the app start we check if there is an authenticated user, if so, we store the user data from the database in the state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        });
      } else{
        this.setState({currentUser:userAuth})
      }
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
