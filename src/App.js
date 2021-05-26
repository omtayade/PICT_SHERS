import React from 'react';
import HomePage from './pages/HomePage/homepage.component';
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from './pages/Checkout/checkout.component'
import Developers from "./pages/Developers/Developers";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import ForgotPassword from "./components/forgot-password/forgot-password.component";
import PersonalDetails from './components/personal-details/personal-details.component'
import {auth,createUserProfile} from './components/firebase/firebase.utils'
import './App.css';
import {Route, Switch , Redirect} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import BuyPage from './pages/BuyPage/buypage.component'
import SellPage from './pages/Sell page/sellpage.component'
// import SignIn from './components/Sign-In/signIn.component'
// import SignUp from './components/Sign-Up/SignUp.component';
import SignIn from "./pages/sign-in/sign-in.component";
import SignUp from "./pages/Sign-up/sign-up.component";
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth); //App.js me createuserProfile user ko database me dalne ka kaam nahi kar raha hai vo to signup compo me hi ho jaata hai  ,yaha pe ye bas database me already stored user ka userRef bhej raha hai taki ham apne state me daal sake,

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

 
  render (){
    return (
      <div className="App">
        <Navbar/>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/buy' component={BuyPage} />
          <Route exact path='/sell' component={SellPage} />

          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path="/developers" component={Developers} />

          <Route exact path='/signin'  render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn />
            }/>
          <Route exact path='/signup'  render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUp />
            }/>
             <Route
            exact
            path="/signin/forgot-password"
            component={ForgotPassword}
          />
          <Route exact path='/personal-details' component={PersonalDetails} />


        </Switch>
        
      </div>
   );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)), //the rightmost setcurrentuser is the one which is imported from redux user actions.
});

export default connect(mapStateToProps, mapDispatchToProps)(App);