import React from "react";
import styled from "styled-components";
import { useNuggetsContext } from '../context'

/**JavaScript-Nuggets-app version 7 - 
 * Map-Method Values - Features: 
 * 
 *       --> Refactoring 'MapMethod' Component.
 * 
 *       --> Building 'Wrapper' Component to 
 *           style the 'message' and 'table'.
 * 
 *        -->Building 'MapMethodWrapper'
 *           to style the 'table'.    
 * 
 * Note: next versions i'll refactor the
 * whole app to include all the methods
 * and examples
 */

const MapMethod = () => {

    const { data }  = useNuggetsContext()

    return(
        <>
        <Wrapper>
        <h2>This method map an array structure and render the 
            data, is ideal when you have a list of items and
            you want to render it:
        </h2>

        {/**<h2>Provided by Nuggets Context: {datas}</h2> */}
        <MapMethodWrapper>
        <ul className="tags">
            <li>name:</li>
            <li>age:</li>
            <li>position:</li>
        </ul>    
        {data.map((person) => {
            const { name, age, position } = person
            return(
            <ul key={age}>
                <li>
                    <h1>{name}</h1>
                </li>
                <li>
                    <h1>{age}</h1> 
                </li>
                <li>
                    <h1>{position}</h1>
                </li>
            </ul>    
            )
        })}
        </MapMethodWrapper>

        </Wrapper>
        </>
    )

}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const MapMethodWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;

    ul{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        list-style-type: none;
    }
    
    li{
        width: 6rem;
    }

    .tags{
        color: darkviolet;
        font-weight: 700;
        text-transform: capitalize;
        text-decoration: underline;
    }
`

export default MapMethod;