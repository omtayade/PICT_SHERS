import React from 'react';
import SHOP_DATA from '../../components/App.data'
import BookGallery from '../../components/BookGallery/BookGallery.component'
import EbookGallery from '../../components/EbookGallery/EbookGallery.component'
import GraphicsGallery from '../../components/GraphicsGallery/GraphicsGallery.component'
import './buypage.styles.scss'
class BuyPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
           
            pointer:"bookPtr"
        }
    }

    handleClickOnBook =event =>{
        event.preventDefault();
        this.setState({
            pointer:'bookPtr'
        })
    }

    handleClickOnEbook =event =>{
        event.preventDefault();
        this.setState({
            pointer:'ebookPtr'
        })
    }

    handleClickOnGraphics =event =>{
        event.preventDefault();
        this.setState({
            pointer:'graphicPtr'
        })
    }

    render(){
       
        return(
           
            <div className='buypage'>
                <div className="flex-container menu">
                    <div id="menu" onClick={this.handleClickOnBook}>
                        <a href="/books">
                            <div id="img">
                                {/* <FontAwesome className="fa fa-book fa-3x" /> */}
                               
                            </div>

                        <p>Books
                        </p>
                        </a>
                    </div>
                    <div id="menu" onClick={this.handleClickOnEbook}>
                        <a href="/ebooks">
                            <div id="img">
                                {/* <FontAwesome className="fa fa-file-text fa-3x" aria-hidden="true" /> */}
                                
                            </div>
                       
                        <p>E-Books
                        </p>
                        </a>
                    </div>
                    <div id="menu" onClick={this.handleClickOnGraphics}>
                        <a href="/materials">
                        <div id="img">
                        {/* <FontAwesome className="fas fa-drafting-compass fa-3x" aria-hidden="true" /> */}
                            
                        </div>
                       
                      <p>Materials
                      </p>
                      </a>
                    </div>
                </div>


                <div className='products'>
                    {
                        this.state.pointer==='bookPtr'?
                            (<div> <BookGallery/></div>)
                        :this.state.pointer==="graphicPtr"?
                            (<div><h1><GraphicsGallery/></h1></div>)
                        :this.state.pointer==="ebookPtr"?
                            (<div><EbookGallery/></div>)
                        :null
                    }
                </div>

            </div>

        );
    }
}
export default BuyPage;
