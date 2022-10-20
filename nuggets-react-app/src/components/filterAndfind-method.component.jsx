import React, { useState } from "react";
import { OrSomePeople } from '../data'

/**JavaScript-Nuggets-app version 4 - 
 * FilterAndFind - Features: 
 * 
 *       --> Stays in the same version
 *           no major changes.
 * 
 *       --> Cleaning bugs and errors
 *           related with the key prop.
 * 
 * Note: next versions i'll refactor the
 * whole app to include all the methods
 * and examples
 */

const FilterAndFind = () => {
  const [ showyounger, setShowyounger ] = useState(false);
  const [ showposition, setShowposition ] = useState(false);
  const [ showmanager, setShowmanager ] = useState(false);
  
  const youngPeople = () => {
    setShowyounger(!showyounger)
  }

  const showPosition = () => {
    setShowposition(!showposition)
  }

  const showManager = () => {
    setShowmanager(!showmanager)
  }

    return(
        <>
          <h2>Filter and Find Component</h2>
          <button onClick={youngPeople}>
            People under 40
          </button>
          
          { showyounger && OrSomePeople.filter((person) => person.age < 40).map((youngPeople) =>{
            const { name, age, position } = youngPeople;
            return(
              <div key={age}>
                <h2>the people under 40 is:</h2>
                <h2>name:{name} , age:{age}</h2>
                <h3>position:{position}</h3>
              </div>
            )
          })}
          <button onClick={showPosition}>Position 'Surgical Tech'</button>
          {showposition && OrSomePeople.filter((person) => person.position === 'Surgical Tech').map((positionPeople) =>{
            const { name, age, position } = positionPeople;
            return(
              <div key={age}>
                <h2>Position 'Surgical Tech':</h2>
                <h2>name: {name} , position: {position}</h2>
              </div>
            )
          })}
          {/** fix to show an error message*/}
          <button onClick={showManager}>Show Manager</button>
          {showmanager && OrSomePeople.filter((person) => person.position === 'Manager').map((positionPeople) =>{
            const { name, age, position } = positionPeople;
            console.log('the position ==>', position)
            return(
              <div key={age}>
                  <h2>Position 'Manager':</h2>
                  <h2>name: {name} , position: {position}</h2>
                </div>
              )            
            })
          }

        </>
    )
}

export default FilterAndFind;