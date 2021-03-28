import { createContext } from 'react'

export const defaultStates = { 
    isDarkTheme: true,
    toggleIsDarkTheme: {},
}

export const AppContext = createContext(defaultStates);