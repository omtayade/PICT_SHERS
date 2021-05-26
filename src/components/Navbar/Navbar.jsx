import React from "react";
import "./Navbar.css";
import Burger from "./Burger/burger";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import CartDropdown from '../Cart-dropdown/cart-dropdown.component'
import CartIcon from '../Cart-dropdown/cartIcon.component'
import {ReactComponent as Avatar} from '../../assets/avatar.svg'
import {ReactComponent as Logo} from '../../assets/Logo.svg'
const Navbar = ({hidden}) => {
  return (
    <div className="navbar">
      <div className="logo"><Logo/></div>
      {/* <CartIcon/> */}
    
    {hidden?null:<CartDropdown/>}
      <Burger />
     <div className='cartIcon'> <CartIcon/> </div> 
     <div><Avatar className='avataram' /></div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  // currentUser: state.user.currentUser  //Equal as=> currentUser:rootReducer.userReducer.currentUser
  hidden:selectCartHidden
  
});

export default connect(mapStateToProps)(Navbar);
