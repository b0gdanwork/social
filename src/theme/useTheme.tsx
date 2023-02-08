import { useContext, useEffect, useState } from "react"
import { ThemeContext, ThemeContextT, ThemesT } from "./ThemeContext"


const useTheme = () => {
  const contextValue:ThemeContextT = useContext(ThemeContext)

  return { theme: contextValue.theme, setTheme: contextValue.setTheme}
}

export default useTheme