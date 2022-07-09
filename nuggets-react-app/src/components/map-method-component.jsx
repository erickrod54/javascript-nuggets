import React from "react";
import { NuggetsContext } from '../context'

/**Nuggets react version 3 - Map method - 
 * MapMethod Component:
 *        -->Modifying the importing 
 *          -reference data js file-
 * 
 */
const MapMethod = () => {

    const { data }  = React.useContext(NuggetsContext)

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