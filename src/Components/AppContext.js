import React, { createContext, useState } from 'react'

export const AppContext = createContext();

const AppProvider = ({children}) => {

    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleIsDarkTheme = () => {
        setIsDarkTheme(prevValue => !prevValue)
      }

    return (
        <AppContext.Provider value={{
            isDarkTheme,
            toggleIsDarkTheme
        }}>
            {children}
        </AppContext.Provider>
    )
};

export default AppProvider;