import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

// context 
import DataProvider from './context/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
     <App />
    </DataProvider>
  </React.StrictMode>
);
