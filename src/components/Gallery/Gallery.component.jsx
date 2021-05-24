import React from 'react'
import './Gallery.styles.css'
import GalleryItem from '../GalleryItem/GalleryItem.component'
// import CollectionItem from '../Collection-item/collection-item.component'

const Gallery =({title ,items})=>(
 
 <div className="collection-preview">
     <h1 className='title'>{title.toUpperCase()}</h1>
     <div className="preview">
         {items.map(item =>(
            <GalleryItem key={item.id} item={item} />
                
           
         ))}
     </div>
     </div>
 
);

export default Gallery;
    
