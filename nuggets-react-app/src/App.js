import React from 'react';
import Error from './error'
import Home from './home';
//import MapMethod from './components/map-method-component';
//import  UniqueValues  from './components/unique-values-component';
//import FilterAndFind from './components/filterAndfind-method.component';

import { FilterAndFind, MapMethod, UniqueValues } from './components/index.components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './navbar';

/**Nuggets react version 4 - App js file- Features: 
 * 
 *     ---->Importing and placing 'NavBar' Component
 *          with styled components test 
 * 
 * 
 * Note: By this version issues related with react-router
 * -don and react-dom versions are solved so i can start 
 * implementing styled component to refactor the app
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
