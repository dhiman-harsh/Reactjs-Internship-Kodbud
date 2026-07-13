import { useContext } from "react"
import { ThemeContext } from "../context/ThemeChanger"

const ThemeButton = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <button onClick={() => {
            toggleTheme()
        }} className="text-primary-text dark:text-dark-primary-text bg-card dark:bg-dark-card border border-divider dark:border-dark-divider font-medium w-18 py-1 rounded-sm text-sm capitalize">{theme}</button>
    )
}

export default ThemeButton