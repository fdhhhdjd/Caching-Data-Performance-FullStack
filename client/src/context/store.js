import { createContext, useContext, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export const Store = createContext();

export const useMyContext = () => useContext(Store);

export const ContextProvider = ({ children }) => {
  const { search } = useLocation();
  const cache = useRef({});
  const [refetching, setRefetching] = useState(false);

  const { page, sort } = useMemo(() => {
    const page = new URLSearchParams(search).get("page") || 1;
    const sort = new URLSearchParams(search).get("sort") || "-createdAt";
    return { page: Number(page), sort: sort };
  }, [search]);
  Store.displayName = "Tài Heo Dev";
  const value = { page, sort, cache, refetching, setRefetching };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
