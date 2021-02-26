import React from 'react';
import SHOP_DATA from '../../components/App.data'
import PreviewCollection from '../../components/Preview Collection/preview-collection.component'
import {ReactComponent as HOME_BACKGROUND }  from '../../assets/Home_background.svg'
import {ReactComponent as BUY }  from '../../assets/girl_with_button.svg'
import {ReactComponent as SELL }  from '../../assets/send.svg'

import './homepage.styles.scss'
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
                    
                    <div className='combinedbuttons' style = {{
                        display: "flex",
                        flexwrap: "wrap",
                        justifyContent: "space-evenly",
                        alignItems: "center"

                    }
                    }>
                        <div className='b1' style={{
                            width: "50vh",
                            height:"50vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                            
                        }}> <BUY className="buysvg"/></div>
                        <div className='b2' style={{
                            width: "50vh",
                            height:"50vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}> <SELL className="sellsvg"/></div>
                    </div>


                    


                </div>

                <h3 style={{
                    marginLeft:"50px",
                    fontSize:"25px"
                    

                }}>Recommendations</h3>


               <div className='recommendation'> {collections.map(({id , ...otherCollectionProps}) =>(
                    <PreviewCollection key={id} {...otherCollectionProps} />
                    ))}
                </div>
              
                
            </div>
        );
    }
}
export default HomePage;