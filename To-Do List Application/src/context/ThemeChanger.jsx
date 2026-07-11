import { createContext, useState } from "react"

export const ThemeContext = createContext('light')

const ThemeChanger = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
            document.documentElement?.classList.remove('dark')
        } else {
            setTheme('dark')
            document.documentElement?.classList.add('dark')
        }
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeChanger