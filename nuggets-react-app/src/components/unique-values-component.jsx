import React from "react";
import { menu } from "../data";

/**Unique Values version 1 - Features: 
 * 
 *       -->Keeping in 'categories' the 
 *          string 'all' and spreading a
 *          'new Set' of mapping the 
 *          category of every item.
 * 
 *       -->Then Mapping the 'categories'
 *          variable and rendering every
 *          'category'
 * 
 * Note: 'new Set' return 'unique values' 
 * with no repetition even if indeed i have
 * repeteated values
 */

 

const UniqueValues = () => {
 
/**here i create and keep in 'categories'
 * a 'new Set' of unique values*/    
const categories = [ 'all', 
...new Set(menu.map((item) => item.category))]   

    return(
        <>
            {categories.map((category) => {
                return <button>{category}</button>
            })}   
            
        </>
    )

}

export default UniqueValues;