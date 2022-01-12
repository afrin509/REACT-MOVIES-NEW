import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
// import Routing from './Routing';
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  // <App />
  <BrowserRouter>
    {/* <Routing></Routing> */}
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);
