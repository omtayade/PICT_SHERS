import React from 'react'
import './SignInSignUp.styles.scss'
import SignIn from '../../components/Sign-In/signIn.component'
import SignUp from "../../components/Sign-Up/SignUp.component";

const SignInAndSignUp = () =>(
    <div className="sign-in-and-sign-up">
       
        <SignUp/>
        <SignIn/>
        </div>

);


export default SignInAndSignUp