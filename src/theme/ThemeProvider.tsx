import { useContext, useMemo, useState } from "react"
import { ThemeContext, ThemeContextT, ThemesT } from "./ThemeContext"

interface PropsT {
  children: any,
}

const themeLocal = localStorage.getItem('theme') as ThemesT

const ThemeProvider = ({children}:PropsT) => {
  const [theme, setThemeThis] = useState(themeLocal || ThemesT.DARK_THEME)

  const setTheme = (theme:ThemesT) => {
    setThemeThis(theme);
    localStorage.setItem('theme', theme)
  }

  const value:ThemeContextT = useMemo(() => ({
    theme: theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider