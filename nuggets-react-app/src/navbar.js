import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


/**JavaScrip nuggets React version 6 - NavBar -
 * Features:
 * 
 *  --> Removing 'useLocation' hook to it's own 
 *      component.
 * 
 * Note: this approach has static links
*/

const NavBar = () => {

    return(
       <NavBarWrapper>
        <nav>
            <ul>
                <li>
                    <Link to='/map-method'>Map method</Link>                    
                </li>
                <li>
                    <Link to='/unique-values'>Unique Values</Link>                    
                </li>
                <li>
                    <Link to='/filter-and-find'>Filter and find method</Link>                    
                </li>
            </ul>
            
        </nav>
        
       </NavBarWrapper>
       
    )
}

const NavBarWrapper = styled.div`
    ul{
        display: flex;
        justify-content: space-around;
        list-style-type: none;
    }

    li{
        text-decoration: none;
    }
`

export default NavBar;