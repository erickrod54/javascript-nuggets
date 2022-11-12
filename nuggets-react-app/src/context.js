import React, { useContext } from 'react';
import { bob, data, friends, fruits, linksData, menu, staff } from './data';

/**Nuggets-react-app version 14 - context js 
 * - Features:
 * 
 *      --> Importing and providing 'friends' and
 *          'fruits' data.
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
                linksData,
                fruits,
                friends,
                bob
            }}>
            {children}
        </NuggetsContext.Provider>
    )
}

export const useNuggetsContext = () => {
    return useContext(NuggetsContext)
}