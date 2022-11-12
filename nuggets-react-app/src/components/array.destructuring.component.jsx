import React from "react";
import styled from "styled-components";
import { useNuggetsContext } from "../context";

/**Nuggets react version 14 - ArrayDestructuring  - 
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

    //console.log('fruits array ==>', fruits)

    /**here i access the 'fruits' items i want */
    const fruit1 = fruits[0]
    const fruit2 = fruits[1]

    //console.log('single fruit 1 ==>', fruit1)
    //console.log('single fruit 2 ==>', fruit2)
    //console.log('friends array ==>', friends)

    /**this variables are made in order to swap them */
    let first = 'bob ';
    let second = ' john';
    
    return(
        <ArrayDestructuringWrapper>
            <h2>Array destructuring</h2>

            <p>array destructuring is the easiest way to access/unpack
                variables from arrays, and objects, for example i have
                the following array of 'fruits':
            </p>

            <section>
                {fruits.map((fruit) => {
                    return(
                        <div key={fruit}>
                            <h4>{fruit}</h4>
                        </div>
                    )
                })}
            </section>

            <p>array destructuring is the easiest way to access/unpack
                variables from arrays, and objects, for example i have
                the following array of 'friends':
            </p>

            <section>
                {friends.map((friend) => {
                    return(
                        <div key={friend}>
                           <h4>{friend}</h4>     
                        </div>
                    )
                })}
            </section>

            <p>let's take the following example, i need to access
                to the first two fruits of the 'fruit' array, i'll
                do it in the following way:
            </p>

            <section>
                <p>{`const fruit1 = fruit[0]`}</p>
                <p>{`const fruit2 = fruit[1]`}</p>
            </section>

            <p>using the index that starts at '0', 
               so this will result in:
            </p>

            <section>
                <h4>{fruit1}</h4>
                <h4>{fruit2}</h4>
            </section>

            <p>keep in mind as the variables 'fruit1' and
               'fruit2' are defined as 'const' i can modified
               them, but if i defined them as 'let' i can 
               modify them later.
            </p>

            <p>another way to access them is destructuring
                directly in the array as follows ( this 
                example is made using friends array, in 
                react i just filter them and i can get the same result ):
            </p>

            <section>
                <p>{`const ['bob', 'kelly'] = friends`}</p>
            </section>

            <p>when i want to perform operations to mofify the array
               as for example the 'friends' order, let's make a mini
               'friends' array to test it out:
            </p>
            <section className="code-block">
                <p>{`let first = 'bob' `}</p>
                <p>{`let second = 'john' `}</p>
                <p>{`[second, first] = [first, second] `}</p>
            </section>

            <p>'first' and 'second' will swap, as follows (the right
                side is the instruction to swap ):</p>

            <section>
                {[second, first] = [first, second ]}
            </section>    

        </ArrayDestructuringWrapper>
    )
}

const ArrayDestructuringWrapper = styled.div`
    section, .code-block{
        display: flex;
        justify-content: space-around;
        border: 1px solid black;
    }

    .code-block{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`

export default ArrayDestructuring;