import React from "react";
import styled from "styled-components";

/**Nuggets react version 6 - MainTitle - 
 * Features: 
 * 
 *     --> Building 'MainTitle'.
 * 
 *     --> Building 'TitleWrapper' Style
 *          Component.
 * 
 *     --> Destructuring title content.
 * 
 * Note: This component will be maybe 
 * updated
 */

const MainTitle = ({ title }) => {

    return(
        <TitleWrapper>
            {title}
        </TitleWrapper>
    )
}


const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;

    a{
        color: darkviolet;
        text-decoration: none;
        text-transform: capitalize;
        text-decoration: underline 5px solid darkorange;
    }

`

export default MainTitle;