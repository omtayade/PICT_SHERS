import React from 'react'
import SHOP_DATA from '../App.data'
import './EbookGallery.styles.scss'
import Gallery from '../Gallery/Gallery.component'

class EbookGallery extends React.Component{
    constructor(props){
        super(props);

        this.state={
            Ebooks:SHOP_DATA[2]
        }
    }


    render(){
        const{Ebooks}=this.state;
        return(
            <div className='buybookcomponent'>
               
                    <Gallery key={Ebooks.id} title={Ebooks.title} items={Ebooks.items} />
            
            </div>
        );
    }
}
export default EbookGallery