import React from "react";
import styled from "styled-components";
import { useNuggetsContext } from "../context";

/**JavaScript-Nuggets-app version 7 - 
 * Unique Values - Features: 
 * 
 *       --> Importing menu from 
 *          'useNuggetsContext()'.
 * 
 *       --> Logging and texting 
 *           'menu' data from context
 * 
 * Note: next versions i'll refactor the
 * whole app to include all the methods
 * and examples
 */

 

const UniqueValues = () => {


const { menu } = useNuggetsContext()

console.log('the menu data', menu)
 
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

const Wrappper = styled.div`

`

export default UniqueValues;