import React from "react";
import { useNuggetsContext } from '../context'

/**Nuggets-react-app version 4 - map-mehod-compoent 
 * - Features:
 * 
 *      --> Fixing on version 4 'map-method-component'.
 * 
 *      --> Destrucutring the 'data' from 
 *          'useNuggetsContext' hook.
 * 
 * Note: Destruturing data from the Provider in order
 * to map it and render on this Component.  
 */

const MapMethod = () => {

    const { data }  = useNuggetsContext()

    return(
        <>
        {/**<h2>Provided by Nuggets Context: {datas}</h2> */}
        {data.map((person) => {
            const { name, age, position } = person
            return(
                <>
                <h1>{name}</h1>
                <h1>{age}</h1> 
                <h1>{position}</h1>
                </>
            )
        })}
        
        </>
    )

}

export default MapMethod;