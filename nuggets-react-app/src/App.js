import React, { useState } from 'react';
import MapMethod from '../src/components/map-method-component';
import { data } from './data';
import './App.css';

/**Nuggets react version 4 - map method - Features: 
 * 
 *     ----> Building getAgesByTwo()
 * 
 */

function App() {
  
  /**i build this state for toggle and show the people */
  const [show, setShow] = useState(false)
  /**i build this state for oldAges */
  const [  oldAges, setOldAges ] = useState(false)
  /**this is the state for the current age */
  const [  age, setAge ] = useState(false)

 /**here i get the current age */
  const getAges = () => {
     const currentAge = data.map((person) => {
      return(
        <h1>{person.age}</h1>
       )
     })

     return currentAge

  }
  
  /**here i get the ages by 2 */
  const getAgesByTwo = () => {
    const ByTwo = data.map((person) => {
     return(
       <h1>{person.age * 2}</h1>
      )
    })

    return ByTwo

 }

  return (
    <div className="App">
      <>
      <button onClick={()=> setShow(!show)}>Show People</button>
      { show && <MapMethod />}
        {/**here i trigger to getAges by onClick */}
        <button onClick={() => setOldAges(!oldAges)}>Show Old Ages</button>
        { oldAges && getAges()}
       {/**pending building by twice */}
        <button onClick={() => setAge(!age)}>Ages By Twice</button>
        { age && getAgesByTwo() }
      </>
      
    </div>
  );
}

export default App;
