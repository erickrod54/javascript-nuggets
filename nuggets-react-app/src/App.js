import React, { useState } from 'react';
import MapMethod from '../src/components/map-method-component'
import './App.css';

/**Nuggets react version 2 - map method - Features: 
 * 
 *     ----> Building states to toggle 'people', and 
 *           ages    
 *   
 *   Note: Pending features show ages, and ages by 
 *   twice
 * 
 */

function App() {
  /**i build this state for toggle and show the people */
  const [show, setShow] = useState(false)
  /**i build this state to toogle the ages options */
  const [ ages, setAges ] = useState(false)
  /**i build this state for oldAges */
  const [  oldAges, setOldAges ] = useState(false)


  return (
    <div className="App">
      <>
      <button onClick={()=> setShow(!show)}>Show People</button>
      { show && <MapMethod />}
      <button onClick={() => setAges(!ages)}>Show Ages </button>
      { ages && 
      <div>
        <button onClick={() => setOldAges(!oldAges)}>Show Old Ages</button>
        <button>Show Ages by twice</button>
      </div>}
      </>
      
    </div>
  );
}

export default App;
