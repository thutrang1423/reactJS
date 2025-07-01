import { useState, createContext } from "react"

const ThemeContext = createContext()

function ThemeProvider({ children }) {
    //theme quản lý chính trạng thái chính nó 
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const value = {
        theme,
        toggleTheme,
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }
