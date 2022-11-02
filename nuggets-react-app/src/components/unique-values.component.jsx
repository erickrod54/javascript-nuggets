import React from "react";
import styled from "styled-components";
import { useNuggetsContext } from "../context";

/**JavaScript-Nuggets-app version 9 - 
 * Unique Values - Features: 
 * 
 *       --> Refactoring 'UniqueValues'
 * 
 * Note: pending to make in it 
 * responsive
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


            <ul >
            <section>
                <p>The unique values method creates a 'new Set' 
                    (an array) that filters eficiently an array 
                    that originaly has duplicates as follows:
                </p>
            </section>
                <li>
                {menu.map((item) => {
                    const { id, category } = item;
                    return(
                    <ul key={id} >
                    <li>
                        <button key={id}>{category}</button>
                    </li>
                </ul>     
                    )
                })}
                </li>
                <section>
                <p>
                    After applying :
                </p>
                <ul>
                    <li>
                        <section className="code-block">
                            <p>{`const categories = [ 'all', ...new Set(menu.map((item) => item.category))]`}</p>
                        </section>
                    </li>
                </ul>
                <p>
                    will result in, 'unique values' ( useful cases when i have for 
                        categories for several items and i need to keep only
                        'unique values' as result):
                </p>
              </section>
                <li >
                {categories.map((category) => {
                    
                    return (
                    <ul key={category} >
                        <li>
                            <button>{category}</button>
                        </li>
                    </ul>
                    
                    )
                })}    
                </li>
            </ul>
        
        </UniqueValuesWrapper>
       </Wrappper>
            
        
    )

}

const Wrappper = styled.div`

`

const UniqueValuesWrapper = styled.div`
display: flex;
justify-content: center;

    ul{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        
        width: 70%;
    }

 
    li{
        display: flex;
    }

    section ul li {
        border: 1px solid black;
        margin-bottom: 20px;
    }

    
`

export default UniqueValues;