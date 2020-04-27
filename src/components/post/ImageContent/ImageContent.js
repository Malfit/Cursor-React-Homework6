import React from 'react';
import './ImageContent.css';

const ImageContent = ({item}) => {
    return(
        <div className="imageContentDiv"> 
            <img className = "imageContent" src={item.imagePost} alt="error"></img>
        </div>
    )
}

export default ImageContent;