import React, { useState } from "react";
import styled from "styled-components";
import { ArrayDestructuringWrapper } from "../styled.components";

/**JavaScript-Nuggets-app version 24 - 
 * CallbackFunction - Features: 
 * 
 *       --> Building 'CallbackFunction'. 
 * 
 * Note: By this version this data is going
 * to be use to refactor navBar Component
 *  
 */

const CallbackFunction = () => {

    const [ upper, setUpper ] = useState('')

    const handleUpperCase = () => {
        const fullName = (`${upper} smith`).toUpperCase()    
        setUpper(fullName)
    }

    const handleChange = (event) => {
        event.persist();
        setUpper(event.target.value)
    }
    
    
    return(
        <ArrayDestructuringWrapper>
            <h2>callback function:</h2>

            <p>let's make the input uppercase:</p>

            <input 
                type='text'
                placeholder="type a name"
                value={upper}
                onChange={handleChange}
                />
            <button onClick={handleUpperCase}>Change uppercase (test)</button>

            <Wrapper className="code-block">
                {upper}
            </Wrapper>

            <p>
                so in this function in plain vanilla 
                javascript would be like this:
            </p>

            <div className="code-block">
                <p>a first function:</p>
                <p>{`const handleUpperCase = () => {`}</p>
                <p>...</p>
                <p>{'}'}</p>
                <p>and a second funtion:</p>
                <p>{`const handleName = (name, cb) => {`}</p>
                <p>...</p>
                <p>{'}'}</p>
                <p>that receive a function as parameter</p>
            </div>

            <p>
                in 'react' can be done in the following way:
            </p>

            <div className="code-block">
                <p>a first function:</p>
                <p>{`const handleUpperCase = () => {`}</p>
                <p>...</p>
                <p>{'}'}</p>
                <p>and a second funtion will change:</p>
                <p>{`const handleChange = (name, cb) => {`}</p>
                <p>...</p>
                <p>{'}'}</p>
                <p>by adding 'handleChange'</p>
                <p>on a {`'onChange={handleChange}'`}</p>
                <p>in the 'onChange' attb in the input</p>
                <p>also mutating the state -using useState-</p>
                <p>in each of them:</p>
                <p>setUpper(fullName) for 'handleUpperCase'</p>
                <p>setUpper(event.target.value)</p>
                <p>for 'handleChange'</p>
            </div>

            <p>
                this way will mutate 'onChange' and 'onClick'
                and this will represent a 'callback' function
                implementation in react
            </p>

        </ArrayDestructuringWrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 3rem;
`

export default CallbackFunction;