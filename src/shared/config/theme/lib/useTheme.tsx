import { useContext } from 'react';

import { ThemeContext, ThemeContextT } from '../context/ThemeContext';

const useTheme = () => {
  const contextValue:ThemeContextT = useContext(ThemeContext)

  return { theme: contextValue.theme, setTheme: contextValue.setTheme, toogleTheme: contextValue.toogleTheme}
}

export default useTheme