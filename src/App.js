import React from 'react';
import HomePage from './pages/HomePage/homepage.component';
// import ShopPage from './pages/shopPage/shop.component'
// import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/Headers/header.component'
// import {auth} from './firebase/firebase.utils'
import './App.css';
import {Route, Switch} from 'react-router-dom';

import BuyPage from './pages/BuyPage/buypage.component'

class App extends React.Component {
 

 
  
 
  render (){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/buy' component={BuyPage} />
        </Switch>
        
      </div>
   );
  }
}

export default App;