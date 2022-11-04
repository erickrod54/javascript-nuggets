import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNuggetsContext } from "./context";

/**JavaScrip nuggets React version 12 - NavBar -
 * Features:
 * 
 *  --> Refactoring 'NavBar' to get the links
 *      dinamicly 
 * 
 * Note: this component is going to be refactored
 * for the next versions
*/

const NavBar = () => {

    const { linksData } = useNuggetsContext()

    console.log('testing links data ==> ', linksData)

    return(
        <>
        <h2>Methods:</h2>
       <NavBarWrapper>

            {linksData.map((link) => { 
                const { id, url, name } = link;

                return(
                    <ul key={id}>
                        <Link to={url}>
                            {name}
                        </Link>
                    </ul>
                )
            })}
       </NavBarWrapper>
        </>
       
    )
}

const NavBarWrapper = styled.div`
display: flex;
justify-content: space-around;

    ul{
        display: flex;
        list-style-type: none;
        margin: 10px;
        padding: 10px;
    }

    li{
        flex-shrink: 0;
        text-decoration: none;
    }
`

export default NavBar;