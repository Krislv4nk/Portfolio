import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio/" future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
