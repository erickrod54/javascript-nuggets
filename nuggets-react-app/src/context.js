import React, { useContext } from 'react';
import { academy, bestFriend, bob, boys, data, friends, fruits, girls, johnData, linksData, menu, people, staff, workers} from './data';

/**Nuggets-react-app version 19 - context js 
 * - Features:
 * 
 *      --> Importing and providing 'people'
 *          data.
 * 
 * Note: this data will be use for spread operator.
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
                bob,
                johnData,
                academy,
                boys,
                girls,
                bestFriend,
                workers,
                people                    
            }}>
            {children}
        </NuggetsContext.Provider>
    )
}

export const useNuggetsContext = () => {
    return useContext(NuggetsContext)
}