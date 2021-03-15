import React from 'react';
import HomePage from './pages/HomePage/homepage.component';

import Header from './components/Headers/header.component'
import {auth,createUserProfile} from './components/firebase/firebase.utils'
import './App.css';
import {Route, Switch} from 'react-router-dom';

import BuyPage from './pages/BuyPage/buypage.component'

import SignIn from './components/Sign-In/signIn.component'
import SignUp from './components/Sign-Up/SignUp.component';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount(){
 
    
   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
     if(userAuth){
 
      const userRef = await  createUserProfile(userAuth);
 
       userRef.onSnapshot(snapShot =>{
        this.setState({
          currentUser:{
          id:snapShot.id,
          ...snapShot.data()
          }
        } , ()=>{
          console.log(this.state)
        });
       });
 
      
     }
     this.setState({currentUser:userAuth});
  
   });
 }
 componentWillUnmount(){
   this.unsubscribeFromAuth();
 }
   
  
  
 
  render (){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/buy' component={BuyPage} />
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>

        </Switch>
        
      </div>
   );
  }
}

export default App;