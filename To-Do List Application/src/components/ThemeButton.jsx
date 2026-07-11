import { useContext } from "react"
import { ThemeContext } from "../context/ThemeChanger"

const ThemeButton = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <button onClick={() => {
            toggleTheme()
        }} className="text-primary-text dark:text-dark-primary-text bg-primary-accent dark:bg-dark-primary-accent px-2 py-1 rounded-sm border-none text-sm">Toggle Theme</button>
    )
}

export default ThemeButton