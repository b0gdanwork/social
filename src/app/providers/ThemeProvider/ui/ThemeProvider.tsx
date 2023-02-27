import { type ReactNode, useCallback, useMemo, useState } from 'react';
import { ThemeContext, type ThemeContextT, ThemesT } from 'shared/config/theme/context/ThemeContext';

interface PropsT {
  children: ReactNode,
}

const themeLocal = localStorage.getItem('theme') as ThemesT

const ThemeProvider = ({ children }: PropsT) => {
  const [theme, setThemeThis] = useState(themeLocal || ThemesT.DARK_THEME)

  const setTheme = useCallback((theme: ThemesT) => {
    setThemeThis(theme);
    localStorage.setItem('theme', theme)
  }, [])

  const toogleTheme = useCallback(() => {
    switch (theme) {
      case ThemesT.DARK_THEME:
        setTheme(ThemesT.BLUE_THEME);
        break;
      case ThemesT.BLUE_THEME:
        setTheme(ThemesT.DARK_THEME);
        break;
      default:
        setTheme(ThemesT.BLUE_THEME);
        break;
    }
  }, [setTheme, theme])

  const value: ThemeContextT = useMemo(() => ({
    theme,
    setTheme,
    toogleTheme
  }), [theme, setTheme, toogleTheme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider