import React, { useContext } from 'react';
import { data, menu } from './data';

/**Nuggets-react-app version 7 - context js 
 * - Features:
 * 
 *      --> Importing and providing 'menu' data.
 * 
 * Note: with 'menu' data being provided by context
 * i will start to refactor unique values app
 */

/**Making the 'NuggetsContext' i'll have access
 * to the 'Consumer' and 'Provider' method */
export const NuggetsContext = React.createContext();

export const NuggetsProvider = ({ children }) => {

    return(
        <NuggetsContext.Provider 
            value={{
                data,
                menu
            }}>
            {children}
        </NuggetsContext.Provider>
    )
}

export const useNuggetsContext = () => {
    return useContext(NuggetsContext)
}