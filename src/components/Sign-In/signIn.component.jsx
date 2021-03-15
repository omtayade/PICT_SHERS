import React from 'react'
import FormInput from '../Form-Input/formInput.component'
import CustomButton from '../Custom-button/customButton.component'
import {auth, signInWithGoogle} from '../firebase/firebase.utils'
import './signIn.styles.scss'
import { Link } from 'react-router-dom'


class SignIn extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = async event=>{
        event.preventDefault();
        const {email , password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email , password);

            this.setState({email:'' , password:''})
        }
        catch(error){
            console.log(error);
            alert(error.message)
        }        

        
    }

    handleChange = event =>{
        const {name ,value} = event.target;

        this.setState({ [name]:value})
    }

    render(){
        return(
            <div>
                <div className="sign-in">
                    <h2 style={{color:"black"}}>I already have an account</h2>
                    <span style={{color:"black"}}>Sign in with your email and password</span>

                    <form onSubmit={this.handleSubmit} >
                        <FormInput type="email" name="email" label="Email" value={this.state.email} handleChange={this.handleChange} required/>
                        
                        <FormInput type="password" name="password" label="Password" value={this.state.password} handleChange={this.handleChange} required/>
                    <div className='buttons'>
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{''}Sign in with Google{''}</CustomButton>
                    </div>
                    

                    </form>
                
                </div>
                <div className="switchPage">
                    <h3 style={{color:"black" }}>Don't have an account?</h3>
                    <Link to='/signup'>
                    <h4 style={{color:"red" }}>  Register</h4>
                    </Link>
                    
                </div>
            

            </div>
        )

    }


}
export default SignIn