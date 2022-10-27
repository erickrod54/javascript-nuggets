import React from "react";
import { menu } from "../data";

/**JavaScript-Nuggets-app version 4 - 
 * Unique Values - Features: 
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

 

const UniqueValues = () => {
 
/**here i create and keep in 'categories'
 * a 'new Set' of unique values*/    
const categories = [ 'all', 
...new Set(menu.map((item) => item.category))]   

    return(
        <>
            {categories.map((category) => {
                return <button key={category}>{category}</button>
            })}   
            
        </>
    )

}

export default UniqueValues;