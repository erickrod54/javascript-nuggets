import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";


/**JavaScrip nuggets React version 4 - navbar js -
 * Features:
 * 
 *  --> Building Navbar Component
 * 
 * Note: this approach has static links
*/

const NavBar = () => {
  /**just in case if i need to 
   * checkout the whole object */

  //const location = useLocation();

  //i'll only destructure pathname
  const { pathname } = useLocation();

    return(
       <NavBarWrapper>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>                    
                </li>
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
            <h2>You're in: { pathname }</h2>
        </nav>
        
       </NavBarWrapper>
       
    )
}

const NavBarWrapper = styled.div`

`

export default NavBar;