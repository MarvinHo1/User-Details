import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import App from './components/App';
import {createStore} from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers);

ReactDOM.render(
  //provider makes the store available to all containers/componenets.
    //easy to set up a provider
    <Provider store = {store}>
     <App />   
    </Provider>,
    document.getElementById('root')
);