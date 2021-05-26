import React from 'react';
import './GalleryItem.styles.css'
import {connect} from 'react-redux'
import  {AddItems} from '../../redux/cart/cart.actions'
import CustomButton from '../Custom-button/customButton.component'
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import {auth} from '../firebase/firebase.utils'
import { toast } from "react-toastify";

const GalleryItem = ({item , AddItems , CurrentUser}) => {
   
    const handleClick = async () => {
        if (CurrentUser) {
            await auth.currentUser.reload();

            if (auth.currentUser.emailVerified && CurrentUser) {
                AddItems(item);
            }
            else if (auth.currentUser.emailVerified == false && CurrentUser){
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
   
   
    const { name , price ,imageUrl}=item;

    
    return(
    <div className="collection-item">
        <div className="image">
            <img src={imageUrl}></img>
        </div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton onClick={handleClick} inverted>Add to cart</CustomButton>

    </div>
);
}
const mapDispatchToProps =dispatch =>({
    AddItems: item =>dispatch(AddItems(item))
});
const mapStateToProps = createStructuredSelector({
    // currentUser: state.user.currentUser  //Equal as=> currentUser:rootReducer.userReducer.currentUser
    CurrentUser: selectCurrentUser,
  });
export default connect(mapStateToProps ,mapDispatchToProps) (GalleryItem)
