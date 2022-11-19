import styled from "styled-components";

/**Nuggets react version 20 - styled.components  - 
 * Features: 
 *
 *     --> Adding '.code-block-items' to 
 *          the file for style components.
 * 
 * Note: This component will be refactored in later
 * versions, 'spread' and 'rest' operator will have
 * its own component in later versions.
 */

/**styled component for 'ArrayDestructuring', 'spreadAndRest' */
export const ArrayDestructuringWrapper = styled.div`
    section, .code-block{
        display: flex;
        justify-content: space-around;
        border: 1px solid black;
    }

    button{
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .code-block-items{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        
        button{
            font-size: 6px;
        }
    }

    .hide{ 
    display: flex;
    width: 400px;
    height: 100px;

    div{
        display: flex;
        padding: 1rem;
        h3{
            margin-left: 1rem;
        }
    }
    }

`