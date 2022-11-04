import React, { useState } from "react";
import styled from "styled-components";
import { OrSomePeople } from '../data'

/**JavaScript-Nuggets-app version 12 - 
 * FilterAndFind - Features: 
 * 
 *       --> Refactoring 'FilterAndFind'.
 * 
 * Note: Pending to improve styles
 */

const FilterAndFind = () => {
  const [ filterby, setFilterBy ] = useState({
    peopleUnder40: 40,
    position:'Surgical Tech',
    manager:''
  })

  const handleFilterby = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log('filter => name selected ==>', name, ', value in it ==>', value)
    
    setFilterBy({...filterby, [name]:value })
  }

    return(
        <>
          <FilterAndFindWrapper>
          <h2>Filter and Find Component</h2>
            <select
              name='selection'
              id='selection'
              value={filterby}
              onChange={handleFilterby}
            >
              <option value="">select a filter</option>
              <option value={40}>filter people under 40</option>
              <option value="Surgical Tech">filter Surgical Tech</option>
            </select>

            {OrSomePeople.filter((item) => item.age < filterby.selection).map((under40) => {
                const { name, age } = under40
                return(
                  <div key={age}>
                    <h2>{name}</h2>
                    <p>{age}</p>
                  </div>
              )
              })}

            {OrSomePeople.filter((item) => item.position === filterby.selection).map((positions) => {
                const { name, age, position } = positions
                return(
                  <div key={age}>
                    <h2>{name}</h2>
                    <p>{position}</p>
                    <p>{age}</p>
                  </div>
              )
              })}

          </FilterAndFindWrapper>

        </>
    )
}

const FilterAndFindWrapper = styled.div`
    display: flex;
    flex-direction: column;


`

export default FilterAndFind;