import React from 'react'
import SHOP_DATA from '../App.data'
import './BookGallery.styles.scss'
import Gallery from '../Gallery/Gallery.component'

class BookGallery extends React.Component{
    constructor(props){
        super(props);

        this.state={
            books:SHOP_DATA[0]
        }
    }


    render(){
        const{books}=this.state;
        return(
            <div className='buybookcomponent'>
               
                    <Gallery key={books.id} title={books.title} items={books.items} />
            
            </div>
        );
    }
}
export default BookGallery