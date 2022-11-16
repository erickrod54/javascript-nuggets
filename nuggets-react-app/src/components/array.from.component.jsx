import React, { useState } from "react";
import { useNuggetsContext } from "../context";
import { ArrayDestructuringWrapper } from "../styled.components";

/**JavaScript-Nuggets-app version 19 - 
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

    const items = Array.from({ length: 120}, (_, index) => {
        return index + 1
    })

    const itemsPerPage = 14;

    const pages = Math.ceil(items.length / itemsPerPage )

    const newItems = Array.from({ length: pages}, (_, index) =>
    {
        const start = index * itemsPerPage
        const tempItems = items.slice(start, start + itemsPerPage)
        return tempItems
    }
    )

    console.log('items array in pages:', newItems)

    //console.log('the pages # is:', pages)

   //console.log('the items:',items)


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

            <h3>Array.From for pagination building:</h3>

            <p>
                let's say i have 120 items i want to show
                but i can't display all of them in one 
                page so build a pagination using array.from
            </p>

            <section className="code-block-items">
                {items.map((item, index) => {
                    return <button key={index}>{item}</button>
                })}
            </section>

            <p>
                so above i have the 120 items, now 
                i want to displaying them nicely in
                the screen, so do it in the following
                way:
            </p>

            <section className="code-block">
                <p>
                    so i have to set the items
                </p>
                <p>that i want per page, let's
                    say '14':</p>
                    const itemsPerPage = 14;
                
                <p>then my 'items' array have
                    '120' elements 
                </p>
                <p>
                    that the same 'lenght' property so 
                </p>
                <p>
                    i divide this between my 
                    'itemsPerPage'
                </p>
                <p>to get the 'pages' :</p>
                <p>const pages</p>
                 <p>= Math.ceil(items.length / itemsPerPage )</p>
            </section>

            <p>
                'Math.ceil' does the round to exact values
                when there are cases that the dividion 
                is not 'exact', so this way i'll get always
                exact number for the pages the result of this is:
            </p>

            <section>
                <p>'{pages}' pages</p> 
            </section>

            <p>
                now the deal is to create a new array
                let's name it 'newItems', this new 
                array will have the pages fill with
                items:    
            </p>

            <section className="code-block">
                <p>{`const newItems = `}</p>
                <p>{`Array.from({ length: pages}, (_, index) => {`}</p>
                <p>{`const start = index * itemsPerPage`}</p>
                <p>{`const tempItems = `}</p>
                <p>{`items.slice(start, start + itemsPerPage) `}</p>
                <p>{`return tempItems`}</p>
                <p>{`}`}</p>
                <p>{`)`}</p>
            </section>

            <p>
                'tempItems' will be the items that
                fill the array
            </p>
            
        </ArrayDestructuringWrapper>
    )
}


export default ArrayFrom;