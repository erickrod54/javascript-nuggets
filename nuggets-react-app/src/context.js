import React, { useContext } from 'react';
import { data, menu, staff } from './data';

/**Nuggets-react-app version 10 - context js 
 * - Features:
 * 
 *      --> Importing and providing 'staff' data.
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
                staff
            }}>
            {children}
        </NuggetsContext.Provider>
    )
}

export const useNuggetsContext = () => {
    return useContext(NuggetsContext)
}