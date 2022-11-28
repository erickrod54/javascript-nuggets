import React, { useContext } from 'react';
import { useState } from 'react';
import { academy, bestFriend, bob, boys, data, friends, fruits, girls, johnData, linksData, menu, people, staff, workers} from './data';

/**Nuggets-react-app version 21 - context js 
 * - Features:
 * 
 *      --> Placing states and handler and providing 
 *          them.
 *  
 * Note: this data will be use for spread operator.
 */

/**Making the 'NuggetsContext' i'll have access
 * to the 'Consumer' and 'Provider' method */

export const NuggetsContext = React.createContext();

export const NuggetsProvider = ({ children }) => {

    /**states and handlers from 'array.from.component' - start */
    const [ findletter, setFindletter ] = useState(false)

    const letters = Array.from(academy)

    const items = Array.from({ length: 120}, (_, index) => {
        return index + 1
    })

    const itemsPerPage = 14;

    const pages = Math.ceil(items.length / itemsPerPage )

    const newItems = Array.from({ length: pages}, (_, index) =>
    {
        const start = index * itemsPerPage
        const tempItems = items.slice(start, start + itemsPerPage)
        return tempItems
    }
    )

    console.log('items array in pages:', newItems)

    const handleFindletter = () => {
        setFindletter(!findletter)
    }
    /**states and handlers from 'array.from.component' - end */

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
                people,
                findletter,
                items,
                pages,
                letters,
                handleFindletter                    
            }}>
            {children}
        </NuggetsContext.Provider>
    )
}

export const useNuggetsContext = () => {
    return useContext(NuggetsContext)
}