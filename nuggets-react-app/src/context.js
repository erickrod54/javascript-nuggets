import React, { useReducer, useContext } from "react";
import { OrSomePeople } from "./data";
import reducer from './reducer'

/**Filter and Find method React version 1 -
 * context js file - Features:
 * 
 *        --->Building AppContext.
 *        --->Building AppProvider
 */

/**here i create the context */
const AppContext = React.createContext()

/**here i create the initial state */
const initialState = {
    loading: false,
    people: OrSomePeople
}

const AppProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( reducer, initialState )
    /**Here i'll build filter and find methods */

    /**here in the value i'll pass the functionalities as a value */
    return(
        <AppContext.Provider
           value={{
               ...state
           }}
        >
         {children}  
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}