import React from 'react'
import './Gallery.styles.scss'
import GalleryItem from '../GalleryItem/GalleryItem.component'
// import CollectionItem from '../Collection-item/collection-item.component'

const Gallery =({title ,items})=>(
 
 <div className="collection-preview">
     <h1 className='title'>{title.toUpperCase()}</h1>
     <div className="preview">
         {items.map(({id , ...otherItemProps}) =>(
            <GalleryItem key={id} {...otherItemProps} />
                
           
         ))}
     </div>
     </div>
 
);

export default Gallery;
    
