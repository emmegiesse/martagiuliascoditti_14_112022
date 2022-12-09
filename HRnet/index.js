// import REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

// import REDUX et STORE
import {Provider} from 'react-redux';
import store from './redux/store';

// import COMPONENTS
import App from './src/app/App.js';

// import STYLE
import './index.css';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

 