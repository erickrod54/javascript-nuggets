import React, { useState } from "react";
import styled from "styled-components";
import { useNuggetsContext } from "../context";

/**Nuggets react version 13 - ReduceMethod - 
 * Features: 
 * 
 *     --> Building 'ReduceMethod'
 *      
 *     --> Destructuring 'staff' data
 *          from the context.
 * 
 *     --> Styling the component using 
 *          'ReduceWrapper'
 * 
 * Note: This component will show the 
 * navigation location of the user
 */


const ReduceMethod = () => {

    const [ showtotal, setShowtotal ]  = useState(false)
    const { staff } = useNuggetsContext()

    //console.log('the staff data ==>', staff)

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
            
            <p>i have an array 'staff': </p>
             
                
            <section>
                <div>
                <h4>name</h4>
                <h4>age</h4>
                <h4>position</h4>
                <h4>salary</h4>
                </div>
                {staff.map((employee) => {
                    const { name, age, position, salary } = employee

                    return(
                        
                        <div key={salary}>
                            <p>{name}</p>
                            <p>{age}</p>
                            <p>{position}</p>
                            <p>{salary}</p>
                        </div>
                    )
                })}
            </section>

            <p>and i i want to calculate
                the total of the 'salary' prop, so i'll do it the
                following way, using the reduce method:</p>

            <div className="code-block">
                <p>{'staff.reduce((total, person) => {'}</p>
                <p>{'total += person.salary;'}</p>
                <p>{'return total'}</p>
                <p>{'}, 0)'}</p>
            </div>    

            <p>where 'staff' is the data and is being reduce
               in one of the props 'salary' for all the 
               employees</p>
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

    section , .code-block{
        display: flex;
        flex-direction: column;
        border: 1px solid black;
    }

    .code-block{
        justify-content: center;
        align-items: center;
    }

    section div{
        display: flex;
        justify-content: space-evenly;
    }

    section div p{
        margin: 10px;
        padding: 10px;
    }
`

export default ReduceMethod;