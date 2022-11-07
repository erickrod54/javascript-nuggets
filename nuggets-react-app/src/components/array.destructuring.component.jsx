import React from "react";
import { useNuggetsContext } from "../context";

/**Nuggets react version 13 - ReduceMethod - 
 * Features: 
 * 
 *     --> Building Basic 'ArrayDestructuring' 
 *          Component.
 * 
 *     --> Testing 'fruits' and 'friends'
 *          data.
 * 
 * Note: This component will show the 
 * navigation location of the user
 */

const ArrayDestructuring = () => {

    const { fruits, friends } = useNuggetsContext()

    console.log('fruits array ==>', fruits)
    console.log('friends array ==>', friends)

    return(
        <h2>Array destructuring</h2>
    )
}

export default ArrayDestructuring;