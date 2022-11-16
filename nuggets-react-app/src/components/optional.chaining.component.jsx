import React, { useState } from "react";
import { useNuggetsContext } from "../context";
import { ArrayDestructuringWrapper } from "../styled.components";

/**Nuggets react version 19 - ArrayDestructuring  - 
 * Features: 
 *
 *     --> Building 'OptionalChaining'.
 * 
 * Note: This component will be refactored in later
 * versions, 'spread' and 'rest' operator will have
 * its own component in later versions.
 */

const OptionalChaining = () => {
    
    const { people } = useNuggetsContext()
    console.log('optional chaining data ==> ',people)

    const [ peoplemap, setPeoplemap ] = useState(false)
    const [ peoplemapfixed, setPeoplemapfixed ] = useState(false)

    const handlePeople = () => {
        setPeoplemap(!peoplemap)
    }

    const handlePeoplefixed = () => {
        setPeoplemapfixed(!peoplemapfixed)
    }

    return(
        <ArrayDestructuringWrapper>
            <h2>optional chaning</h2>

            <p>
                optional chaining is a implementations for arrays 
                with nested objects, i have the 'people' array:
            </p>

            <section className="code-block">
                <p>{`{`}</p>
                <p>{`name:'bob',`}</p>
                <p>{`location: { street: '123 main street'},`}</p>
                <p>{`timezone:{ offset: '+7:00'}`}</p>
                <p>{`timezone:{ offset: '+7:00'}`}</p>
                <p>...(an extract from 'people array')</p>
            </section>

            <p>
                inside of it i can see how 'location' and
                and 'timezone' has nested arrays to a second
                level deep, not only this i have the second
                object of the people array and this one has not
                the 'timezone' prop so if i try to map and get
                the offset will throw a big error ( because 
                the second object ):
            </p>

            <section className="code-block">
                <p>{`{`}</p>
                <p>{`name: 'peter',`}</p>
                <p>{`locations:{street:'123 pine street'}`}</p>
                <p>{`},`}</p>
                <p>...(an extract from 'people array')</p>
            </section>

            <p>this will throw an error ( demonstration propouses )</p>
            <button onClick={handlePeople}>map the 'people' array</button>

            {peoplemap ?
            <section>
                {people.map((person, index) => {
                    return(
                        <div key={index}>
                            <p>{person.timezone.offset}</p>
                        </div>
                    )
                })}
            </section>
            :
            null
            }

            <p>
                and this will throw a big error 
                'Uncaught TypeError: Cannot read 
                properties of undefined (reading 
                'offset')',  because cannot read
                the offset value for all the 
                people objects
            </p>

            <button onClick={handlePeoplefixed}>map the 'people' array fixed</button>

            {
                peoplemapfixed ?
                <>
                    {people.map((person, index) => {
                    
                    return(
                        <div key={index}>
                            <p>{person?.location?.timezone?.offset}</p>
                            
                        </div>
                    )
                    })}                
                </>
                
                :
                null
            }

            <p>checking the prompt, now the app does not break, and this
                this line
            </p>

            <section>
                <p>{`person?.location?.timezone?.offset`}</p>
            </section>

            <p>
                the dot and question mark '?.' checks for the prop 
                value before render and throw 'undefined in case 
                that does not find the prop
            </p>

        </ArrayDestructuringWrapper>
        
    )
}

export default OptionalChaining;