import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import MainTitle from "../components/main.title";
import WhereAmI from "../components/whereami.component";
import NavBar from "../navbar";

/**Nuggets react version 6 - Home - 
 * Features: 
 * 
 *     --> Implementing 'useLocation'
 *         hook to conditionally render
 *         a home message.
 * 
 *     --> Building 'OutletWrapper' style
 *         Component to make a container
 *          for the outlet data.
 * 
 * Note: This component will show the 
 * navigation location of the user
 */

const Home = () => {

    const location = useLocation()

    const { pathname } = location;

    return(
        <HomeWrapper>
            <MainTitle title={
                <Link to='/'>
                    <h1>JS nuggets react version</h1>
                </Link>
            }/>
            <NavBar />
            { pathname === '/' ? 
            <h2>JS nuggets react version is the collelction
                of vanilla JavaScript methods that are made 
                to solve efficientlly problems
            </h2>
            :
            null 
            }
            
            <OutletWrapper>
              <Outlet />
            </OutletWrapper>
            <WhereAmI />
        </HomeWrapper>
        
    )
}

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
    padding: 2rem;

    h2{
        display: flex;
        justify-content: center;
        align-content: center;
    }
`

const OutletWrapper = styled.section`
    width: 30rem;
    height: 40rem;
`

export default Home;