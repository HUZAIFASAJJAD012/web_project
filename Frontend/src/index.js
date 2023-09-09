import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter
 ><App />
 </BrowserRouter>
    

);
