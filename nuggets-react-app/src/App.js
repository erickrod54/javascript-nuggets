import React from 'react';
import ErrorComponent from './error'
import Home from './pages/home'
import { FilterAndFind, MapMethod, ReduceMethod, UniqueValues } from './components/index.components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


/**Nuggets react version 11 - App js file- Features: 
 * 
 *     --> Importing and placing 'ReduceMethod'
 *         and building a route for it. 
 * 
 * Note: by this version i'll work refactoring
 * navbar to add reduce-method and the future 
 * methods
 */

function App() {

  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path='/'  element={<Home />} >
            <Route path='/map-method' element={<MapMethod />}/>
            <Route path='/unique-values'  element={<UniqueValues />}/>
            <Route path='/filter-and-find'  element={<FilterAndFind />}/>
            <Route path='/reduce-method' element={<ReduceMethod />}/>          
            <Route path='*'  element={<ErrorComponent />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
