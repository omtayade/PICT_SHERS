import React from 'react'
 import {Link} from 'react-router-dom'
//  import {auth} from '../../firebase/firebase.utils'
 import {ReactComponent as Logo} from '../../assets/cart.svg'
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {ReactComponent as LogoTiger} from '../../assets/LogoTiger.svg'

 import './header.styles.scss'

 const Header = ({currentUser})=>(
     <div className="header">
         
             {/* <LogoTiger className="logo" />  */}
             {/* <Link  to="/">
                <h2 style={{float:'left'}}>PICT SHERS</h2> 
            </Link> */}
            <Link className=' logo-container ' to='/'>
                <Logo className="logo" /> 
            </Link>

         <div className="options">
             
             <input type ='search' className='search option' placeholder='Search' size='50'/>
             
             <Link className="option" to="/">
             <span style={{color:"white"}}>  Home</span>
             </Link>
             
            <Link className='option' to='/signin'>
               <span style={{color:"white"}}>  Login/Register</span>
            </Link>
            
             
         </div>
     </div>
 )
 export default Header