import React, { createContext, useState } from "react";

export const GlobalContext = createContext<{
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}>({ darkMode: false, setDarkMode: () => [] });

interface GlobalProviderType {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderType> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <GlobalContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
};
