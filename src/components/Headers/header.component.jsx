import React from 'react'
 import {Link} from 'react-router-dom'
 import {auth} from '../firebase/firebase.utils'
 import {ReactComponent as Logo} from '../../assets/cart.svg'


 import './header.styles.scss'

 const Header = ({currentUser})=>(
    <div className="header">
         
            
            <Link className=' logo-container ' to='/'>
                <Logo className="logo" /> 
            </Link>

        <div className="options">
             
             <input type ='search' className='search option' placeholder='Search' size='50'/>
             
             <Link className="option" to="/">
             <span style={{color:"white"}}>  Home</span>
             </Link>
             {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                SIGN OUT
                </div>
              ):(
                <Link className='option' to='/signin'>
                 <span style={{color:"white"}}>  Login/Register</span>
                </Link>
            )}



           
            
             
        </div>
    </div>
 )
 export default Header