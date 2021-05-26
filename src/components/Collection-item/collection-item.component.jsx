import React from 'react';
import './collection-item.styles.css'


const CollectionItem = ({id , name , price ,imageUrl}) => (
    <div className="collection-item1">
        <div className="image1">
            <img src={imageUrl}></img>
        </div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
)
export default CollectionItem