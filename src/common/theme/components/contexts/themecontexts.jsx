import React from "react";

export const initialThemeState = {
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
  setTheme: () => null,
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;
