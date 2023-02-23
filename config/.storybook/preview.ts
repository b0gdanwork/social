import { ThemesT } from './../../src/shared/config/theme/context/ThemeContext';
import 'app/styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: [
    { name: 'dark', class: ThemesT.DARK_THEME, default: true },
    { name: 'blue', class: ThemesT.BLUE_THEME}
],
  
}