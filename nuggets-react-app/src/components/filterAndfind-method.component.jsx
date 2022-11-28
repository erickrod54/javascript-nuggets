import React from "react";
import styled from "styled-components";
import { useNuggetsContext } from "../context";
import { OrSomePeople } from '../data'

/**JavaScript-Nuggets-app version 22 - 
 * FilterAndFind - Features: 
 * 
 *       --> Migrating states and handlers
 *           to the context.
 * 
 * Note: Pending to improve styles
 */

 const FilterAndFind = () => {

  const { filterby, handleFilterby } = useNuggetsContext()

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