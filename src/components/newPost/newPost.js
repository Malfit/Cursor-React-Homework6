import React from 'react';
import {useSelector} from 'react-redux';
import './newPost.css';

const NewPost = () => {
    const posts = useSelector(state => state.newPost);
    return (
        posts.map(item=> (
            <ul className="new-post">
                <li>{item.textValue}</li>
                <li>{item.linkValue}</li>
                <li>{item.author}</li>
            </ul>
        ))
    )
}

export default NewPost;
