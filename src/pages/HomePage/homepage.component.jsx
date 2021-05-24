import React from 'react';
import SHOP_DATA from '../../components/App.data'
import PreviewCollection from '../../components/Preview Collection/preview-collection.component'
import {ReactComponent as HOME_BACKGROUND }  from '../../assets/Home_background.svg'
import {ReactComponent as BUY }  from '../../assets/girl_with_button.svg'
import {ReactComponent as SELL }  from '../../assets/send_with_boy.svg'
import {Link} from 'react-router-dom'
import './homepage.styles.css'
class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='homepage'>
                <div className='upper-homepage'>
                    <HOME_BACKGROUND className="backgroundcurve"/>
                    
                    <div style = {{ display: "flex",flexwrap: "wrap",justifyContent: "space-evenly",alignItems: "center"}}>
                        <Link to='/buy'>
                            <BUY className="buysvg"/>
                        </Link>
                        <Link to='/sell'>
                            <SELL className="sellsvg"/>
                        </Link>     
                    </div>


                </div>
                

                <h3 style={{marginLeft:"50px",fontSize:"25px"}}>
                    Recommendations
                </h3>


               <div className='recommendation'> {collections.map(({id , ...otherCollectionProps}) =>(
                    <PreviewCollection key={id} {...otherCollectionProps} />
                    ))}
                </div>
              
                
            </div>
        );
    }
}
export default HomePage;