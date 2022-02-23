import React, { useState } from 'react';
import MapMethod from '../src/components/map-method-component';
import data from './data';
import './App.css';

/**Nuggets react version 3 - map method - Features: 
 * 
 *     ----> Building getAges to get the ages from 
 *          the data    
 *   
 *   Note: Pending features ages by 
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

 /**here i get the current age */
  const getAges = () => {
     const currentAge = data.map((person) => {
      return(
        <h1>{person.age}</h1>
       )
     })

     return currentAge

  }
  

  return (
    <div className="App">
      <>
      <button onClick={()=> setShow(!show)}>Show People</button>
      { show && <MapMethod />}
      <button onClick={() => setAges(!ages)}>Show Ages </button>
      { ages && 
      <div>
        {/**here i trigger to getAges by onClick */}
        <button onClick={() => setOldAges(!oldAges)}>Show Old Ages</button>
        { oldAges && getAges()}
       {/**pending building by twice */}
        <button>Ages By Twice</button>
      </div>}
      </>
      
    </div>
  );
}

export default App;
