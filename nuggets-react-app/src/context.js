import React from 'react';
import { data } from './data';

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
    React.useContext(NuggetsContext);
}