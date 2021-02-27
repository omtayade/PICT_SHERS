import React from 'react';
import HomePage from './pages/HomePage/homepage.component';
// import ShopPage from './pages/shopPage/shop.component'
// import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/Headers/header.component'
// import {auth} from './firebase/firebase.utils'
import './App.css';
// import {Route, Switch} from 'react-router-dom';



class App extends React.Component {
 

 
  
 
  render (){
    return (
      <div className="App">
        <Header/>
        <HomePage/>
       
      </div>
   );
  }
}

export default App;