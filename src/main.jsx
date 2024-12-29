import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import NetworkCheck from './NetworkCheck.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <NetworkCheck /> */}
  </StrictMode>
);
