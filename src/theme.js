import React, {useContext} from 'react';
import {ThemeProvider } from 'styled-components';
import { AppContext } from './Components/AppContext';

const theme = {
    light: {
        backgroundColorLight: "rgb(240, 240, 240)",        
        colorLight: "rgb(240, 240, 240)",        
    },
    dark: {
        backgroundColorDark: "rgb(30, 30, 30)",
        colorDark: "white",
    }
}
const Theme = ({children}) => {
const {isDarkTheme} = useContext(AppContext)
return(<ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>{children}</ThemeProvider>)
}
export default Theme;