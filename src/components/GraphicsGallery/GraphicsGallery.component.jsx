import React from 'react'
import SHOP_DATA from '../App.data'
// import './GraphicsGallery.styles.scss'
import Gallery from '../Gallery/Gallery.component'

class GraphicsGallery extends React.Component{
    constructor(props){
        super(props);

        this.state={
            materials:SHOP_DATA[1]
        }
    }


    render(){
        const{materials}=this.state;
        return(
            <div className='buybookcomponent'>
               
                    <Gallery key={materials.id} title={materials.title} items={materials.items} />
            
            </div>
        );
    }
}
export default GraphicsGallery