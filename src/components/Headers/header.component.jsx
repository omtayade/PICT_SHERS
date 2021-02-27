import React from 'react'
 import {Link} from 'react-router-dom'
//  import {auth} from '../../firebase/firebase.utils'
 import {ReactComponent as Logo} from '../../assets/cart.svg'
//  import {ReactComponent as Logo} from '../../assets/cart.svg'

 import './header.styles.scss'

 const Header = ({currentUser})=>(
     <div className="header">
         <Link className="logo-container" to="/">
             <Logo className="logo" /> 
         </Link>

         <div className="options">
             <Link className="option" to="/shop">
             <input type ='search' className='search' placeholder='Search'/>
             </Link>
             <Link className="option" to="/shop">
             <span style={{color:"white"}}>  Home</span>
             </Link>
             
            <Link className='option' to='/signin'>
               <span style={{color:"white"}}>  Login/Register</span>
            </Link>
            <Link className='option logo-container ' to='/signin'>
                <Logo className="logo" /> 
            </Link>
             
         </div>
     </div>
 )
 export default Header