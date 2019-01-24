import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

ReactDOM.render(
  <div className="container-fluid">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
