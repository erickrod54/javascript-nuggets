import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NuggetsProvider } from './context';

/**Nuggets react version 5 - index js - 
 * Features: 
 * 
 *     --> Importing 'NuggetsProvider' and 
 *         wrapping the 'App'
 * 
 * Note: By this version errors and warnings are 
 * cleared, so i can start the refactor
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NuggetsProvider>
      <App />
    </NuggetsProvider>
  </React.StrictMode>
);


