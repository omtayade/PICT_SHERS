import React from 'react';
import SHOP_DATA from '../../components/App.data'
import PreviewCollection from '../../components/Preview Collection/preview-collection.component'
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
               <div className='recommendation'> {collections.map(({id , ...otherCollectionProps}) =>(
                    <PreviewCollection key={id} {...otherCollectionProps} />
                    ))}
                </div>
              
                
            </div>
        );
    }
}
export default HomePage;