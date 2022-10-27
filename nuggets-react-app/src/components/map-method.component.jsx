import React from "react";
import { useNuggetsContext } from '../context'

/**JavaScript-Nuggets-app version 4 - 
 * Map-Method Values - Features: 
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

const MapMethod = () => {

    const { data }  = useNuggetsContext()

    return(
        <>
        {/**<h2>Provided by Nuggets Context: {datas}</h2> */}
        {data.map((person) => {
            const { name, age, position } = person
            return(
            <div key={age}>
                <h1>{name}</h1>
                <h1>{age}</h1> 
                <h1>{position}</h1>
            </div>    
            )
        })}
        
        </>
    )

}

export default MapMethod;