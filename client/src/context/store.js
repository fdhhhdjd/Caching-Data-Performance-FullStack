import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";

export const Store = createContext();

export const useMyContext = () => useContext(Store);

export const ContextProvider = ({ children }) => {
  const value = {};

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
