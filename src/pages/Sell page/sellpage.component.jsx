import React from 'react';
import {connect} from 'react-redux'
import { createStructuredSelector } from "reselect";
import { toast } from "react-toastify";
import {ReactComponent as BookSvg} from '../../assets/book.svg'
import {ReactComponent as EbookSvg} from '../../assets/page.svg'
import {ReactComponent as GraphicSvg} from '../../assets/compass.svg'

import {auth , setData} from '../../components/firebase/firebase.utils'
import { selectCurrentUser } from "../../redux/user/user.selectors";
import './sellpage.styles.css'
import FormInput from '../../components/Form-Input/formInput.component'
import CustomButton from '../../components/Custom-button/customButton.component'
class SellPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
           
            pointer:"bookPtr",
            productType:"book",
            productName:"",
            productCondition:"",
            sellingPrice:"",
            meetingPlace:""
        }
    }
 
    
   
    handleClickOnBook =event =>{
        event.preventDefault();
        this.setState({
            pointer:'bookPtr',
            productType:'book',

        })
    }

    handleClickOnEbook =event =>{
        event.preventDefault();
        this.setState({
            pointer:'ebookPtr',
            productType:'ebook'
        })
    }

    handleClickOnGraphics =event =>{
        event.preventDefault();
        this.setState({
            pointer:'graphicPtr',
            productType:'graphicsmaterial'
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };

    handleSubmit = async(e)=>{
        e.preventDefault();
        const{productType , productName,productCondition,sellingPrice,meetingPlace}=this.state;
        console.log(productCondition)
        if (this.props.CurrentUser) {
            await auth.currentUser.reload();

            if (auth.currentUser.emailVerified && this.props.CurrentUser) {
              await setData(productType , productName,productCondition,sellingPrice,meetingPlace , this.props.CurrentUser);
              toast.success("Thank you! we have successfully recorded your product and we will notify you once we get the best deal for you", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            }
            else if (auth.currentUser.emailVerified == false && this.props.CurrentUser){
                toast.warn("Verify Email first!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            }
        }
        else{
            toast.warn("Login first!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }
    render(){
       
        return(
           
            <div className='sellpage'>
                <div className="flex-container menu">
                    <div id="menu" onClick={this.handleClickOnBook} style={{boxShadow:`${this.state.pointer =="bookPtr"?"0 0 16px 0 #01a9d3":"none"}`}}>
                        
                            <div id="img">
                               <BookSvg />
                            </div>

                        <p>Books
                        </p>
                        
                    </div>
                    <div id="menu" onClick={this.handleClickOnEbook} style={{boxShadow:`${this.state.pointer =="ebookPtr"?"0 0 16px 0 #01a9d3":"none"}`}}>
                        
                            <div id="img">
                                <EbookSvg />                                
                            </div>
                       
                        <p>E-Books
                        </p>
                        
                    </div>
                    <div id="menu" onClick={this.handleClickOnGraphics} style={{boxShadow:`${this.state.pointer =="graphicPtr"?"0 0 16px 0 #01a9d3":"none"}`}}>
                        
                        <div id="img">
                            <GraphicSvg />                            
                        </div>
                       
                      <p>Materials
                      </p>
                      
                    </div>
                </div>
            <div  className='boxsell'>
            <form onSubmit={this.handleSubmit} >
            <FormInput
              type="text"
              name="productName"
              label="Enter product name"
              value={this.state.productName}
              handleChange={this.handleChange}
              required
            />
            

            <FormInput
              type="text"
              name="productCondition"
              label="Condition"
              value={this.state.productCondition}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type="text"
              name="sellingPrice"
              label="Selling Price"
              value={this.state.sellingPrice}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type="text"
              name="meetingPlace"
              label="Preferred Meeting Place"
              value={this.state.meetingPlace}
              handleChange={this.handleChange}
              required
            />
            <div class="disp flex-row">
                <label for="description"><h5 style={{color:"white"}}>Book Description :</h5></label>
                <textarea id="description" placeholder="Enter.." autocomplete="on" name="description"></textarea>
            </div>

            <div >
              <CustomButton isGoogleSignIn className="but" type="submit">Sell</CustomButton>
              
            </div>
          </form>
            </div>
            


               

            </div>

        );
    }
}

const mapStateToProps = createStructuredSelector({
    // currentUser: state.user.currentUser  //Equal as=> currentUser:rootReducer.userReducer.currentUser
    CurrentUser: selectCurrentUser,
  });
export default connect(mapStateToProps)(SellPage);
