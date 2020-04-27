import { SET_POST_DATA } from '../actions/root.actions';

const initialState = {
  posts: [
    {
      postAuthor : { 
        author:"Anakin Skywalker",
        authorPhoto: "https://kvaclub.ru/wp-content/uploads/2017/02/Anakin_2.png",
        nickname: "@dart_vader",
      },
      date: "23 февр.",
      textPost: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      imagePost: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale", 
      countLikes: 887,
      countComments: 482,
      countSharing: 146,
    },
    {
      postAuthor : { 
        author:"General Hax",
        authorPhoto: "https://kvaclub.ru/wp-content/uploads/2017/02/General-Hux.png",
        nickname: "@dark_general  ",
      },
      date: "24 февр.",
      textPost: "WTF? Who is Ray? Why she is Skywalker? Anakin...?",
      imagePost: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale", 
      countLikes: 345,
      countComments: 235,
      countSharing: 123,
    },
    {
      postAuthor : { 
        author:"Obi-Wan Kenobi",
        authorPhoto: "https://kvaclub.ru/wp-content/uploads/2017/02/Obi-Van.png",
        nickname: "@wan_ken",
      },
      date: "25 февр.",
      textPost: "WTF? Who is Ray? Why she is Skywalker? Hax...?",
      imagePost: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale", 
      countLikes: 960,
      countComments: 343,
      countSharing: 203,
    }
  ] , 
  authors : ["Anakin Skywalker", "General Hax", "Obi-Wan Kenobi"],
  newPost : [
  {
    textValue: "",
    linkValue: "",
    author: "",
  }
  ],

}

  const rootReducer =  (state = initialState, action) => {
     switch (action.type) {
        case SET_POST_DATA:
          return {
            ...state,
            newPost: {textValue: action.textValue, linkValue: action.linkValue, author: action.author},
          }
       default:
        return state;
    }
  }
  

  export default rootReducer;