"use client";
import React, { createContext, useState, useContext, useMemo } from "react";

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("nl");

  const valueContextProvideObject = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage]
  );

  return (
    <AppContext.Provider value={valueContextProvideObject}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
