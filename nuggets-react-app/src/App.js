import React from 'react';
import ErrorComponent from './error'
import Home from './pages/home'
import { FilterAndFind, MapMethod, UniqueValues } from './components/index.components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './navbar';

/**Nuggets react version 5 - App js file- Features: 
 * 
 *     --> Fixing error related with name imports 
 * 
 * Note: This error was fixed by changing 'Error' 
 * for 'ErrorComponent'
 * 
 * By this version errors and warnings are 
 * cleared, so i can start the refactor
 */

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
          <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/map-method' element={<MapMethod />}/>
          <Route path='/unique-values'  element={<UniqueValues />}/>
          <Route path='/filter-and-find'  element={<FilterAndFind />}/>
          <Route path='*'  element={<ErrorComponent />}/>          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
