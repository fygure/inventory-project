import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//react-context
import { ItemContextProvider } from './context/ItemContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemContextProvider>
      <App />
    </ItemContextProvider>
  </React.StrictMode>
);
