import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {emptyCart} from '../../../redux/cart/cart.actions'
import { selectCurrentUser } from "../../../redux/user/user.selectors";

import { auth } from "../../firebase/firebase.utils";

import styled from "styled-components";
import {selectCartHidden} from '../../../redux/cart/cart.selectors'
import CartDropdown from '../../Cart-dropdown/cart-dropdown.component'
import CartIcon from '../../Cart-dropdown/cartIcon.component'

import "./headers.component.css";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  min-width: 70%;
  margin: 0;
  li {
    padding: 13px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(40, 103, 178);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    padding-top: 3.5rem;
    z-index: 100;
    transition: transform 0.3s ease-in-out;
    li .option {
      color: white;
    }
  }
`;



const RightHeader = ({ open, currentUser }) => {
  const handleClick = async () => {
    await auth.signOut();
    window.location.reload();

    
  };

  console.log(currentUser);
  return(
  <Ul open={open}>
    <li>
      <NavLink
        to="/"
        exact={true}
        className="option"
        activeClassName="active__option"
      >
        Home
      </NavLink>
    </li>

    

    <li>
        <NavLink  to='/buy' className='option' activeClassName="active__option">
          Buy
        </NavLink>
      </li>
      <li>
        <NavLink  to='/sell' className='option' activeClassName="active__option">
          Sell
        </NavLink>
      </li>
      <li>
        <NavLink  to='/developers' className='option' activeClassName="active__option">
          Developers
        </NavLink>
      </li>
      <li>
        <NavLink  to='/contact-us' className='option' activeClassName="active__option" >
          Contact Us
        </NavLink>
      </li>
      <li>
        {currentUser ? (
          <NavLink className='option' to='/signin' activeClassName="active__option" onClick={handleClick} >
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink className='option' activeClassName="active__option" to='/signup' >
            Login/Register
          </NavLink>
        )}
      </li>
  </Ul>
)};

const mapStateToProps = createStructuredSelector({
  // currentUser: state.user.currentUser  //Equal as=> currentUser:rootReducer.userReducer.currentUser
  currentUser: selectCurrentUser
  
});
const mapDispatchToProps = (dispatch) => ({
  emptyCart:()=>dispatch(emptyCart())
});

export default connect(mapStateToProps , mapDispatchToProps)(RightHeader);
