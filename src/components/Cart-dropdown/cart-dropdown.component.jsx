import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {createStructuredSelector} from 'reselect'
import './cart-dropdown.styles.css'
import CustomButton from '../Custom-button/customButton.component'
import CartItem from '../Cart-item/cart-item.component'



const CartDropdown =({cartItems , history ,dispatch})=>{
    
   
    return(
    
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {   cartItems.length ?
                (
                cartItems.map(cartItem =>(<CartItem key={cartItem.id} item={cartItem} />))
                ):
                <span className='empty-message'>Your Cart is empty </span>
            }
        </div>
        <CustomButton onClick={()=>
        {history.push('/checkout')
         dispatch(toggleCartHidden()); 
         }} > GO TO CHECKOUT</CustomButton>
    </div>
)};

const mapStateToProps =createStructuredSelector({
    cartItems:selectCartItems
});
export default withRouter(connect(mapStateToProps) (CartDropdown));