import React from 'react';
import {ReactComponent as EbookSvg} from '../../assets/page.svg'
import {ReactComponent as BookSvg} from '../../assets/book.svg'
import {ReactComponent as GraphicSvg} from '../../assets/compass.svg'
import SHOP_DATA from '../../components/App.data'
import BookGallery from '../../components/BookGallery/BookGallery.component'
import EbookGallery from '../../components/EbookGallery/EbookGallery.component'
import GraphicsGallery from '../../components/GraphicsGallery/GraphicsGallery.component'
import './buypage.styles.css'
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
                <div className="flex-container1 menu1">
                    <div id="menu" onClick={this.handleClickOnBook} style={{boxShadow:`${this.state.pointer =="bookPtr"?"0 0 16px 0 #01a9d3":"none"}`}}>
                            <div id="img" >
                                {/* <FontAwesome className="fa fa-book fa-3x" /> */}
                               <BookSvg/>
                            </div>
                        <p>Books
                        </p>
                    </div>
                    <div id="menu" onClick={this.handleClickOnEbook} style={{boxShadow:`${this.state.pointer =="ebookPtr"?"0 0 16px 0 #01a9d3":"none"}`}}>
                       
                            <div id="img" >
                                {/* <FontAwesome className="fa fa-file-text fa-3x" aria-hidden="true" /> */}
                                <EbookSvg/>
                            </div>
                       
                        <p>E-Books
                        </p>
                       
                    </div>
                    <div id="menu" onClick={this.handleClickOnGraphics} style={{boxShadow:`${this.state.pointer =="graphicPtr"?"0 0 16px 0 #01a9d3":"none"}`}}>
                        <div id="img">
                        {/* <FontAwesome className="fas fa-drafting-compass fa-3x" aria-hidden="true" /> */}
                            <GraphicSvg/>
                        </div>
                       
                      <p>Materials
                      </p>
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
