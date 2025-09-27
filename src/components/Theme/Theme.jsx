import React, { createContext, useContext } from "react";
import { useProvideTheme } from "../../hooks/useProvideTheme"; 

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useProvideTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
