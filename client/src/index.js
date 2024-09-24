import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the App component

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the div with id="root"
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);