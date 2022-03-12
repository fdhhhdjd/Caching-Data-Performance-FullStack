import { createContext, useContext, useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';

import reducers from './reducers';

export const Store = createContext()

export const useMyContext = () => useContext(Store)

export const ContextProvider = ({children}) => {
  const init = {
    refresh: false, limit: 5, page: 1, sort: '-createdAt'
  }
  const [state, dispatch] = useReducer(reducers, init)
  const { search } = useLocation()


  useEffect(() => {
    const page = new URLSearchParams(search).get('page') || 1;
    const sort = new URLSearchParams(search).get('sort') || '-createdAt';
    dispatch({type: "SET_PAGE", payload: Number(page)})
    dispatch({type: "SET_SORT", payload: sort})
  },[search, dispatch])
  
  const value = { ...state, dispatch };
  
  return (
    <Store.Provider value={value}>
      {children}
    </Store.Provider>
  );
};

