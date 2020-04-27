import  { createStore } from 'redux';
import rootReducer from './reducers/root.reducer';

const store = createStore(rootReducer);

window.srr = store;

export default store;