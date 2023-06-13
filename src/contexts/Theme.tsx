import { createContext } from "react";

export type ThemeContextData = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export const ThemeContext = createContext({} as ThemeContextData);
