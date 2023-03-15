import { createContext } from 'react'

export enum ThemesT {
  DARK_THEME = 'theme-dark',
  BLUE_THEME = 'theme-blue'
}

export interface ThemeContextT {
  theme?: ThemesT,
  setTheme?: (value: ThemesT) => void,
  toogleTheme?: () => void,
}

export const ThemeContext = createContext<ThemeContextT>({})
