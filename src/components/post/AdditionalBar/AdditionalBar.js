import React from 'react';
import {FiHeart, MdCreate, FiUpload, FiShare2} from 'react-icons/all';
import './AdditionalBar.css';

const AdditionalBar = ({item}) => {   
    return(
        <div className = "postAdditionalBar">
            <ul className="barList">
                <li><MdCreate cursor="pointer" /> {item.countComments} </li>
                <li><FiShare2 cursor="pointer" />  {item.countSharing} </li>
                <li><FiHeart cursor="pointer"  />  {item.countLikes} </li>
                <li><FiUpload/></li>
            </ul>                   
        </div>
        )
}

export default AdditionalBar;