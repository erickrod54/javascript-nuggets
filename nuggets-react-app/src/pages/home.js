import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import MainTitle from "../components/main.title";
import WhereAmI from "../components/whereami.component";
import NavBar from "../navbar";

/**Nuggets react version 6 - Home - 
 * Features: 
 * 
 *     --> Refactoring 'Home' Page.
 *  
 *     --> Importing and placing 
 *         Components
 * 
 *     --> Building 'HomeWrapper'
 *          style Component.
 * 
 * Note: This component will show the 
 * navigation location of the user
 */

const Home = () => {

    return(
        <HomeWrapper>
            <MainTitle title={
                <Link to='/'>
                    <h1>JS nuggets react version</h1>
                </Link>
            }/>
            <NavBar />
              <Outlet />
            <WhereAmI />
        </HomeWrapper>
        
    )
}

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
    padding: 2rem;

   
`

export default Home;