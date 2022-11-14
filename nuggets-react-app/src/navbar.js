import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNuggetsContext } from "./context";

/**JavaScrip nuggets React version 17 - NavBar -
 * Features:
 * 
 *  --> Finish refactoring 'NavBar' style links. 
 * 
 * Note: this component is going to be refactored
 * for the next versions
*/

const NavBar = () => {

    const { linksData } = useNuggetsContext()

    //console.log('testing links data ==> ', linksData)

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
flex-wrap: wrap;


    ul{
        display: flex;
        list-style-type: none;
        margin: 10px;
        padding: 10px;
    }
    
    li{
        flex-shrink: 0;
    }
    
    a{
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 1rem;
        width: 7rem;
        height: 3rem;
        text-decoration: none;
        color: whitesmoke;
        background-color: blueviolet;
        border-radius: 0.50rem;
        border: 1.5px solid orange;
    }

    a:hover{
        cursor: pointer;
        background-color: orange;
        border: 1.5px solid blueviolet;
    }
`

export default NavBar;