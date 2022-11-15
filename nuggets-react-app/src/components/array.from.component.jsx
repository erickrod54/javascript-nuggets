import React, { useState } from "react";
import { useNuggetsContext } from "../context";
import { ArrayDestructuringWrapper } from "../styled.components";

/**JavaScript-Nuggets-app version 18 - 
 * ArrayFrom - Features: 
 * 
 *       --> Building 'ArrayFrom'. 
 * 
 *       --> Destructuring data from context.
 * 
 *       --> Building handleFindletter.
 * 
 * Note: By this version this data is going
 * to be use to refactor navBar Component
 *  
 */

const ArrayFrom = () => {

    const { academy } = useNuggetsContext()

    const [ findletter, setFindletter ] = useState(false)


    const letters = Array.from(academy)


    const handleFindletter = () => {
        setFindletter(!findletter)
    }

    

    return(
        <ArrayDestructuringWrapper>
            <h2>Array.from method:</h2>

            <p>Array.from is widely used
                in situations where i need
                to:
            </p>

            <ul>
                <li>
                    to return an array object 
                    from objects with 'lenght'
                    property or an iterable object
                </li>
                <li>
                    also can turn an array-like/ish 
                    into array - srting, nodeList, Set
                </li>
            </ul>

            <p>
                i have a variable 'academy' with 
                the academy data:
            </p>

            <section>
                <p>{academy}</p>
            </section>

            <p>if i apply 'Array.from':</p>

            <section>
                <p>{`const letters = Array.from(academy)`}</p>
            </section>

            <p>will result in:</p>

            <section>
                {letters.map((letter, index) => {
                    return(
                        <div key={index}>
                            <p>{index}</p>
                            <p>{letter}</p>
                        </div>
                    )
                })}
            </section>

            <p>
                will convert a simple string in an array
                so i can perform operations on it as 
                for example fin the letter 'm':
            </p>

            <button onClick={handleFindletter}>find letter 'm'</button>

            { findletter ?

            <section>
                <p>letter found !!: '{letters.find((letter) => letter === 'm')}'</p>
            </section>
            :
            null
            }
            
        </ArrayDestructuringWrapper>
    )
}


export default ArrayFrom;