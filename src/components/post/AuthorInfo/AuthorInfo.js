import React from 'react';
import './AuthorInfo.css';

import {FaRegCheckCircle, MdKeyboardArrowDown} from 'react-icons/all'

const AuthorInfo = ({item}) => {
    return (
            <div className = "authorInfo">
                <img className = "authorAvatar" src={item.postAuthor.authorPhoto} alt="error"></img>
                <div className = "postInfo"> 
                    <p>{item.postAuthor.author}  <FaRegCheckCircle/>   <span className = "nickname_date">{item.postAuthor.nickname} {item.date}</span> 
                        <span className = "arrowdown"> <MdKeyboardArrowDown/></span></p> 
                       
                    <p>{item.textPost}</p>
                </div>
        </div>
        )
}

export default AuthorInfo;