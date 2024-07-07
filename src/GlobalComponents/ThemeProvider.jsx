import { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext();

const ThemeProvider = (props) => {
    // read from localStorage what theme work now
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || false );
    
    // save in localStorage the new theme
    useEffect(()=>{
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])
    
    const setThemeMode = mode => setTheme(mode)
    return (
        <ThemeContext.Provider value={{ theme, setThemeMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

const useThemeHook = () => {
    const {theme} = useContext(ThemeContext)
    return [theme]
}
export {ThemeProvider, ThemeContext, useThemeHook}
