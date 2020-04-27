export const SET_POST_DATA = 'SET_POST_DATA';

export const addNewPostData = (textValue, linkValue, author)  => ({
    type: SET_POST_DATA,
    textValue,
    linkValue,
    author,
});