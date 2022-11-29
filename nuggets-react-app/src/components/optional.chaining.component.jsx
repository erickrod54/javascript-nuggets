import React, { useState } from "react";
import styled from "styled-components";
import { useNuggetsContext } from "../context";
import { ArrayDestructuringWrapper } from "../styled.components";

/**Nuggets react version 23 - OptionalChaining  - 
 * Features: 
 *
 *     --> Refeactoring and fixing bugs 
 *         'OptionalChaining'.
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

            <p className="red">this will throw an error ( demonstration propouses )</p>
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
                <span className="red">
                'Uncaught TypeError: Cannot read 
                properties of undefined (reading 
                'offset')',  because cannot read
                the offset value for all the 
                people objects
                </span>
            </p>

            <button onClick={handlePeoplefixed}>map the 'people' array fixed</button>

            {
                peoplemapfixed ?
                <Wrapper className="code-block">
                    {people.map((person, index) => {
                        const { name, locations, timezone } = person
                    
                    return(
                        <div key={index}>
                            <p>name: { name || <span className="red">name undefined</span>}</p>
                            <p>street: { locations?.street || <span className="red">street undefined</span>}</p>
                            <p>timezone: { timezone?.offset || <span className="red">timezone undefined</span>}</p>
                        </div>
                    )
                    })}               
                </Wrapper>
                
                
                :
                null
            }

            <p>now the app does not break, and this
                this line:
            </p>

            <section>
                <p>{`<p>{ timezone?.offset || <span className="red">timezone undefined</span>}</p>`}</p>
            </section>

            <p>
                by using the dot and question mark '?.' as timezone?.offset checks for the prop 
                value before render and throw 'undefined in case 
                that does not find the prop, i can check sequentially every 
                prop as it shows in the code:
            </p>

            <section className="code-block">
                <p>{`people.map((person, index) => {`}</p>
                <p>{`const { name, locations, timezone } = person`}</p>
                <p>{`return(`}</p>
                <p>{`<div key={index}>`}</p>
                <p>{`<p>name: { name || <span className="red">name undefined</span>}</p>`}</p>
                <p>{`<p>street: { locations?.street || <span className="red">street undefined</span>}</p>`}</p>
                <p>{`<p>timezone: { timezone?.offset || <span className="red">timezone undefined</span>}</p>`}</p>
                <p>{`)`}</p>
                <p>{`})}`}</p>

                <p>first i am destructuring:</p>
                <span className="red">
                    <p>{`const { name, locations, timezone } = person`}</p>
                </span>
                <p>
                    instead of destructure 'timezone' and 'locations'
                </p>
                <p>
                    i am checking every prop that belongs to them in sequence:
                </p>
                <span className="red">
                    <p>{`locations?.street`}</p>
                </span>
                <p>and:</p>
                <span className="red">
                    <p>{`timezone?.offset`}</p>
                </span>
                <p>
                    as well as 'name', but like in just one level i check it
                    like this:
                </p>
                <span className="red">
                    <p>{`name || 'name undefined'`}</p>
                </span>
                

            </section>

        </ArrayDestructuringWrapper>
        
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export default OptionalChaining;