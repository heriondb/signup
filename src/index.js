import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// reportWebVitals();