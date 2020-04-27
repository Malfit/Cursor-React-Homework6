import React from 'react';
import { useSelector } from 'react-redux';
import AuthorInfo from './components/post/AuthorInfo';
import ImageContent from './components/post/ImageContent';
import AdditionalBar from './components/post/AdditionalBar';
import './App.css';

const App = () => {
  const posts = useSelector(state => state.posts);
  return (
    posts.map((item, index)=>( 
    <div key={item+index} className="post">
      <AuthorInfo item={item} />
      <ImageContent item={item} />
      <AdditionalBar item={item}/>
    </div>
    ))    
  )
}

export default App;
