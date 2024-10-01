import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './app';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Break into separate App/Header/Form components, put in separate files with their own name
