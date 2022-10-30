import React from "react";
import { useLocation } from "react-router-dom";

/**Nuggets react version 6 - WhereAmI - 
 * Features: 
 * 
 *     --> Building 'WhereAmI' Comnponent
 * 
 * Note: This component will show the 
 * navigation location of the user
 */

const WhereAmI = () => {

    /**just in case if i need to 
   * checkout the whole object */

  //const location = useLocation();

  //i'll only destructure pathname

    const { pathname } = useLocation()

    return(
        <h2>You're in: { pathname }</h2>
    )
}

export default WhereAmI;