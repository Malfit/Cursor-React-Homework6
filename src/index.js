import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import Form from './components/Form';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="allApp">
        <App />  
        <div className="form">
          <Form />
        </div> 
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
