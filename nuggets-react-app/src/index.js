import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NuggetsProvider as AppProvider } from './context'

/**Nuggets-react-app version 4 - index js file 
 * - Features:
 * 
 *      --> Importing and wrapping the whole
 *          app with the 'AppProvider'
 * 
 * Note: the Provider is set as an allias, -i have
 * to check the vscode json file -, and is going
 * to provide features and data for the application  
 */

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
