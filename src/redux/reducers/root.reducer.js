import { SET_POST_DATA } from '../actions/root.actions';
const ANAKIN_PHOTO = "https://kvaclub.ru/wp-content/uploads/2017/02/Anakin_2.png";
const HAX_PHOTO = "https://kvaclub.ru/wp-content/uploads/2017/02/General-Hux.png";
const OBI_PHOTO = "https://kvaclub.ru/wp-content/uploads/2017/02/Obi-Van.png";
const ANAKIN_NICKNAME = "@dart_vader";
const HAX_NICKNAME = "@dark_general";
const OBI_NICKNAME = "@wan_ken";

const initialState = {
  posts: [
    {
      id:0,
      postAuthor : { 
        author:"Anakin Skywalker",
        authorPhoto: ANAKIN_PHOTO,
        nickname: ANAKIN_NICKNAME,
      },
      date: "23 февр.",
      textPost: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      imagePost: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale", 
      countLikes: {count:887, isLiked:false},
      countComments: {count:482, isCommented:false},
      countSharing: {count:146, isShared:false},
    },
    {
      id:1,
      postAuthor : { 
        author:"General Hax",
        authorPhoto: HAX_PHOTO,
        nickname: HAX_NICKNAME,
      },
      date: "24 февр.",
      textPost: "WTF? Who is Ray? Why she is Skywalker? Anakin...?",
      imagePost: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale", 
      countLikes: {count:345, isLiked:false},
      countComments: {count:235, isCommented:false},
      countSharing: {count:123, isShared:false},
    },
    {
      id:2,
      postAuthor : { 
        author:"Obi-Wan Kenobi",
        authorPhoto: OBI_PHOTO,
        nickname: OBI_NICKNAME,
      },
      date: "25 февр.",
      textPost: "WTF? Who is Ray? Why she is Skywalker? Hax...?",
      imagePost: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale", 
      countLikes: {count:789, isLiked:false},
      countComments: {count:345, isCommented:false},
      countSharing:{count:203, isShared:false},
    }
  ] , 
  authors : ["Anakin Skywalker", "General Hax", "Obi-Wan Kenobi"],
}
 

  const rootReducer =  (state = initialState, action) => {
    switch (action.type) {
      case SET_POST_DATA:  {
        const getPostAuthorPhoto =  (author)  => {
          if(author === "Anakin Skywalker") {
            return ANAKIN_PHOTO;
          } else if (author === "General Hax"){
            return HAX_PHOTO;
          } else {
            return OBI_PHOTO;
          }
        }   
        const getPostAuthorNickName =  (author)  => {
          if(author === "Anakin Skywalker") {
            return ANAKIN_NICKNAME;
          } else if (author === "General Hax"){
            return HAX_NICKNAME;
          } else {
            return OBI_NICKNAME;
          }
        }
        const post = { 
          id: state.posts.length+1,        
          postAuthor: {          
            author: action.author,        
            authorPhoto: getPostAuthorPhoto(action.author),  
            nickname: getPostAuthorNickName(action.author),  
          },        
          date: "28 апр.",                         
          textPost: action.textValue,       
          imagePost: action.linkValue,  
          countComments: {         
              count: 0,          
              isCommented: false,        
          },        
          countSharing: {          
            count: 0,          
            isShared: false,       
          },        
          countLikes: {         
            count: 0,          
            isLiked: false,       
          }
        }        
        return {       
            ...state, posts: [...state.posts, post]     
        };
      }
      default: 
        return state;
    }
  }
  

  export default rootReducer;