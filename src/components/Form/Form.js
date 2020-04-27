import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNewPostData
  } from '../../redux/actions/root.actions';

import './Form.css';

const Form = () => {
    const [textPost, changeTextPostState] = useState('');
    const [linkPost, changelinkPostState] = useState('');
    const [author, changeAuthor] = useState("Anakin Skywalker");
    const dispatch = useDispatch();
    const authors = useSelector(store => store.authors);

    
    const options = authors.map(item => (
      <option key={item+Date.now()} >{item}</option>
    ))

    const changeTextPost = (e) => {
      changeTextPostState(e.target.value);
    };
    
    const changeLinkToImage = (e) => {
      changelinkPostState(e.target.value);
    };

    const changeAnotherAuthor = (e) =>{
      changeAuthor(e.target.value);
    }

    const onButtonClick = (e) => {
        e.preventDefault();
        dispatch(addNewPostData(textPost, linkPost, author))
        changeTextPostState("");
        changelinkPostState("");
    };


    return (
        <form className="formPost">
          <div className="firstGroup">
            <input
            type="text"
            name="textPost"
            className="formInput"
            placeholder="type text to your post..."
            onChange={changeTextPost}
            value={textPost}
          />
          <input
            type="text"
            name="linkToImage"
            className="formInput"
            placeholder="type link to your post image..."
            onChange={changeLinkToImage}
            value={linkPost}
          />
          <select className="selectAuthorPost"  onChange={changeAnotherAuthor} value={author}>
            {options}
        </select>
        </div>
          <button className="btnPost" onClick={onButtonClick}>Post</button>
        </form>
    )
}

export default Form
