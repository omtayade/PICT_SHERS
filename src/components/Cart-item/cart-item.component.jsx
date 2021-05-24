import React from 'react'
import './cart-item.styles.css'

const CartItem =({item:{imageUrl , price ,name , quantity}})=>(
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name' style={{color:"black"}}> {name}</span>
            <span className='price' style={{color:"black"}}>{quantity} × ${price}</span>
        </div>


    </div>
);
export default CartItem