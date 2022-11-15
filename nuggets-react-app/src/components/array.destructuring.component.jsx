import React, { useState } from "react";
import { useNuggetsContext } from "../context";
import { ArrayDestructuringWrapper } from "../styled.components";

/**Nuggets react version 18 - ArrayDestructuring  - 
 * Features: 
 *
 *     --> Removing 'ArrayDestructuringWrapper' to 
 *          the file for style components.
 * 
 *     --> Migrating 'spread and rest operator'
 *         to its own file
 * 
 * Note: This component will be refactored in later
 * versions, 'spread' and 'rest' operator will have
 * its own component in later versions.
 */

const ArrayDestructuring = () => {

    const { fruits, friends, bob } = useNuggetsContext()
    
    const [ regular, setRegular ] = useState(false)
    
    const [ bobobject, setBobobject ] = useState(false)
    
    /**here i access the 'fruits' items i want */
    const fruit1 = fruits[0]
    const fruit2 = fruits[1]
    
    /**this variables are made in order to swap them */
    let firstNmae = 'bob ';
    let second = ' john';

    const handleBobRegular = () => {
        setRegular(!regular)
        console.log(regular)
    }

    const handleBobObject = () => {
        setBobobject(!bobobject)
        console.log(bobobject)
    }

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
                {[second, firstNmae] = [firstNmae, second ]}
            </section>    

            <h3>Array destructuring - Objects </h3>

            <p>i have the following object for 'bob' and this
            object has a second level of destructuring for
            bob 'siblings':</p>

            <section className="code-block">
                <p>{`first:'bob',`}</p>
                <p>{`last:'sanders',`}</p>
                <p>{`city:'chicago',`}</p>
                <p>{`siblings:{ `}</p>
                    <p>{`sister:'jane',`}</p>
                <p>{`}`}</p>
            </section>

            <p>for the regular properties i can access in 
                the folllowing way:
            </p>

            <section className="code-block">
                <p>{`const { first , last, city } = bob;`}</p>
            </section>     

            <button onClick={handleBobRegular}>access to 'bob' single data</button>

            <section className="code-block hide">
            { regular ?
             
             bob.map((data) => {
                 const { first , last, city } = data;
                 return(
                     <div>
                         <p>{`{`}</p>
                            <h3>{first},</h3>
                            <h3>{last},</h3>
                            <h3>{city}</h3>
                        <p>{`}`}</p>
                    </div>
                    )
                })
                :
                null
            }
            </section>   

            <p>and if i want to access the 'siblings' data
                i have to access to the object first by naming
                the object 'siblings' and then accesing by the
                braackets '{ }' and name of the data of that 
                object that i want it to access 'sister'
            </p>
            
            <section className="code-block">
                <p>{`const { first , last, city, siblings:{ sister } } = bob;`}</p>
            </section>

            <button onClick={handleBobObject}>access to 'bob' object data</button>

            <section className="code-block hide">
            { bobobject ?
             
             bob.map((data) => {
                const { first , last, city, zip, siblings:{ sister, secondsister, thirdsister } } = data;
                /**if i try with any data that does not exist
                 * i will get 'undefined'
                 *  */                
                console.log('bob data object ==>', first , last, city, zip,sister, secondsister, thirdsister )
                 return(
                     <div key={first}>
                         <p>{`{`}</p>
                            <h3>{first},</h3>
                            <h3>{last},</h3>
                            <h3>{city}</h3>
                            <h3>{sister}</h3>
                            <h3>{secondsister}</h3>
                            <h3>{zip}</h3>
                        <p>{`}`}</p>
                    </div>
                    )
                })
                :
                null
            }
            </section>

            <p>let's say that i have a 'React' component, this kind of
                destructuring is very useful to get data in components,
                and i got two flavors:
            </p>

            <ul>
                <li>destructure the object directly in the component</li>
                <li>destructure inside of the component</li>
            </ul>

            <p>if i destructure directly in the component would be like this:</p>

            <section className="code-block">
                <p>{`const BobComponent = `}</p>    
                <p>{`({ first , last, city, siblings:{ sister } }) => { ..`}</p>
            </section>

            <p>if i destructure inside of the component would be like this:</p>
            
            <section className="code-block">
                <p>{`const BobComponent = ( bob ) => { `}</p>    
                <p>{`const { first , last, city, siblings:{ sister } } = bob`}</p>
                <p>{`..`}</p>
            </section>

            <p>then i can render the props that i need</p>

        </ArrayDestructuringWrapper>
    )
}


export default ArrayDestructuring;