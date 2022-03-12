import { useState, useEffect } from "react";
import { useMyContext } from "../context/store";
import useCustomRouter from "./useCustomRouter";

const usePagination = (totalPages) => {
  const { page, sort } = useMyContext();
  const [firstArr, setFirstArr] = useState([]);
  const [lastArr, setLastArr] = useState([]);
  const { pushQuery } = useCustomRouter();
  useEffect(() => {
    const newArr = [...Array(totalPages)].map((_, i) => i + 1);
    if (totalPages <= 4) return setFirstArr(newArr);

    if (totalPages - page >= 3) {
      setFirstArr(newArr.slice(page - 1, page + 2));
      setLastArr(newArr.slice(totalPages - 1));
    } else {
      setFirstArr(newArr.slice(totalPages - 4, totalPages));
      setLastArr([]);
    }
  }, [totalPages, page]);

  function next() {
    const newPage = Math.min(page + 1, totalPages);
    pushQuery({ page: newPage, sort });
  }

  function prev() {
    const newPage = Math.max(page - 1, 1);
    pushQuery({ page: newPage, sort });
  }

  function jump(page) {
    const newPage = Math.max(1, page);

    pushQuery({ page: newPage, sort });
  }

  return { page, firstArr, lastArr, next, prev, jump };
};

export default usePagination;
