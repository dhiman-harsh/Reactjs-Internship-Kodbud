import { createContext, useState } from "react"

export const ThemeContext = createContext('light')

const ThemeChanger = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    if(theme === 'dark') {
        document.documentElement?.classList.add('dark')
    } else {
        document.documentElement?.classList.remove('dark')
    }
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
            document.documentElement?.classList.remove('dark')
            localStorage.setItem("theme", 'light')
        } else {
            setTheme('dark')
            document.documentElement?.classList.add('dark')
            localStorage.setItem("theme", 'dark')
        }
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeChanger