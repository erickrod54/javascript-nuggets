import React, { useContext } from 'react';
import { data } from './data';

/**Nuggets-react-app version 4 - map-mehod-compoent 
 * - Features:
 * 
 *      --> Fixing the 'context' file version
 *          on 4. 
 * 
 *      --> Fixing the 'useNuggetsContext' hook to
 *          use it on the Component that i
 *          need to provide features and data.
 * 
 * Note: 'useNuggetsContext' is going to be use
 * to save lines of code just writting the 
 * 'useContext' hook once.
 */

/**Making the 'NuggetsContext' i'll have access
 * to the 'Consumer' and 'Provider' method */
export const NuggetsContext = React.createContext();

export const NuggetsProvider = ({ children }) => {

    return(
        <NuggetsContext.Provider 
            value={{
                data
            }}>
            {children}
        </NuggetsContext.Provider>
    )
}

export const useNuggetsContext = () => {
    return useContext(NuggetsContext)
}