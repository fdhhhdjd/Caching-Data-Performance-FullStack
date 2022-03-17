import { useMemo } from "react";
import { useCustomRouter, useMyContext } from "../Import/Index";
const usePagination = (totalPages) => {
  const { pushQuery } = useCustomRouter();
  const { page, sort } = useMyContext();
  const { firstArr, lastArr } = useMemo(() => {
    const newArray = [...Array(totalPages)].map((_, i) => i + 1);
    if (totalPages < 4)
      return {
        firstArr: newArray,
        lastArr: [],
      };
    if (totalPages - page >= 4) {
      return {
        firstArr: newArray.slice(page - 1, page + 2),
        lastArr: newArray.slice(totalPages - 1),
      };
    } else {
      return {
        firstArr: newArray.slice(totalPages - 4, totalPages),
        lastArr: [],
      };
    }
  }, [totalPages, page]);
  const isActive = (index) => {
    if (index === page) {
      return "active";
    }
  };
  const prev = () => {
    const newPage = Math.max(page - 1, 1);

    pushQuery({ page: newPage, sort });
  };
  const next = () => {
    const newPage = Math.min(page + 1, totalPages);

    pushQuery({ page: newPage, sort });
  };
  const jump = (num) => {
    pushQuery({ page: num, sort });
  };
  return { firstArr, lastArr, next, jump, prev, isActive };
};

export default usePagination;
