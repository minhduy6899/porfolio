import { useState, createContext, Children } from "react";

const ThemeContext = createContext()


function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    console.log('nhan dc');
    return theme
  }

  const newTheme = theme

  const value = {
    theme,
    toggleTheme
  }
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };