import React, { useState } from "react";
import styled from "styled-components";
import { useNuggetsContext } from "../context";

/**Nuggets react version 12 - ReduceMethod - 
 * Features: 
 * 
 *     --> Building basic 'ReduceMethod'
 *          Component
 * 
 * Note: This component will show the 
 * navigation location of the user
 */


const ReduceMethod = () => {

    const [ showtotal, setShowtotal ]  = useState(false)
    const { staff } = useNuggetsContext()

    const handleDailyTotal = () => {
        setShowtotal(!showtotal)
    }

    return(
        <ReduceWrapper>
            <h2>Reduce method - basic example</h2>
            <p>Reduce iterates, callback function reduces to a single value - number, array, 
            and object, it has three parameters:</p>

            <ul>
                <li>1st parameter (acc) - total of all calculations</li>
                <li>2nd parameter (curr) - current iteration/value</li>
            </ul>
            

            <button onClick={handleDailyTotal}>Calculate total salary</button>
            <h2>
            { showtotal === true ? 
                staff.reduce((total, person) => {
            
                total += person.salary;
                return total
            }, 0)
            
            : 

            null
            }    
            </h2>
        </ReduceWrapper>
    )
}

const ReduceWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default ReduceMethod;