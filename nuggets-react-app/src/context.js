import React, { useContext } from 'react';
import { data, linksData, menu, staff } from './data';

/**Nuggets-react-app version 11 - context js 
 * - Features:
 * 
 *      --> Importing and providing 'linksData'.
 * 
 * Note: with 'staff' data is going to be built
 * the 'ReduceMethod'
 */

/**Making the 'NuggetsContext' i'll have access
 * to the 'Consumer' and 'Provider' method */
export const NuggetsContext = React.createContext();

export const NuggetsProvider = ({ children }) => {

    return(
        <NuggetsContext.Provider 
            value={{
                data,
                menu,
                staff,
                linksData
            }}>
            {children}
        </NuggetsContext.Provider>
    )
}

export const useNuggetsContext = () => {
    return useContext(NuggetsContext)
}