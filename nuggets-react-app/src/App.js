import React from 'react';
import { useGlobalContext } from './context';
import Error from './error'
import Home from './home';
import MapMethod from './components/map-method-component';
import  UniqueValues  from './components/unique-values-component';
import FilterAndFind from './components/filterAndfind-method.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './navbar';

/**Nuggets react version 2 - App js file- Features: 
 * 
 *     ---->Implementing 'react-router-dom' to
 *          set every nuggets-react-version 
 *          Components as Route 
 * 
 */

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/'  element={<Home />}></Route>
          <Route path='/map-method' element={<MapMethod />}/>
          <Route path='/unique-values'  element={<UniqueValues />}/>
          <Route path='/filter-and-find'  element={<FilterAndFind />}/>
          <Route path='*'  element={<Error />}/>          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
