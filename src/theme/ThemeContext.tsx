import { createContext } from 'react';

export enum ThemesT {
  DARK_THEME = "DARK_THEME",
  BLUE_THEME = "BLUE_THEME"
}

export interface ThemeContextT {
  theme?: ThemesT,
  setTheme?: (value:ThemesT) => void
}

export const ThemeContext = createContext<ThemeContextT>({});