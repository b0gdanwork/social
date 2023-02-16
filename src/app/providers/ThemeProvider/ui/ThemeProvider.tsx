import { useMemo, useState } from 'react';
import { ThemeContext, type ThemeContextT, ThemesT } from 'shared/config/theme/context/ThemeContext';

interface PropsT {
  children: any,
}

const themeLocal = localStorage.getItem('theme') as ThemesT

const ThemeProvider = ({ children }: PropsT) => {
  const [theme, setThemeThis] = useState(themeLocal || ThemesT.DARK_THEME)

  const setTheme = (theme: ThemesT) => {
    setThemeThis(theme);
    localStorage.setItem('theme', theme)
  }

  const toogleTheme = () => {
    switch (theme) {
      case ThemesT.DARK_THEME:
        setTheme(ThemesT.BLUE_THEME);
        break;
      case ThemesT.BLUE_THEME:
        setTheme(ThemesT.DARK_THEME);
        break;
    }
  }

  const value: ThemeContextT = useMemo(() => ({
    theme,
    setTheme,
    toogleTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider