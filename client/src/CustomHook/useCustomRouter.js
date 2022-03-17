import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
const useCustomRouter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pushQuery = (query) => {
    const newQuery = new URLSearchParams(query).toString();
    navigate(`${pathname}?${newQuery}`);
  };
  return { pushQuery };
};

export default useCustomRouter;
