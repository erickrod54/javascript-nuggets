import React from "react";
import styled from "styled-components";
import { useNuggetsContext } from "../context";

/**JavaScript-Nuggets-app version 8 - 
 * Unique Values - Features: 
 * 
 *       --> Starting to implement
 *           styled components
 * 
 * Note: this is the start point 
 * to re factor 'UniqueValues'
 * app
 */

 

const UniqueValues = () => {


const { menu } = useNuggetsContext()

console.log('the menu data', menu)
 
/**here i create and keep in 'categories'
 * a 'new Set' of unique values*/    

const categories = [ 'all', 
...new Set(menu.map((item) => item.category))]   

    return(
       <Wrappper>

        <UniqueValuesWrapper>

           {categories.map((category) => {
               return <button key={category}>{category}</button>
           })}   
        </UniqueValuesWrapper>
       </Wrappper>
            
        
    )

}

const Wrappper = styled.div`
    display: flex;
    flex-direction: column;
`

const UniqueValuesWrapper = styled.div`

`

export default UniqueValues;