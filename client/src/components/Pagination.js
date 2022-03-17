import React, { useRef } from "react";
import { usePagination } from "../Import/Index";
const Pagination = React.memo(({ totalPages, page, sort }) => {
  const { firstArr, lastArr, next, jump, prev, isActive } =
    usePagination(totalPages);
  const ref = useRef(0);
  return (
    <div className="pagination">
      <h1>render:{ref.current++}</h1>
      <button onClick={prev}>&laquo;</button>
      {firstArr.map((item, key) => (
        <button
          key={key}
          className={`${isActive(item)}`}
          onClick={() => jump(item)}
        >
          {item}
        </button>
      ))}
      {lastArr.length > 0 && <button>...</button>}
      {lastArr.map((item, key) => (
        <button
          key={key}
          className={`${isActive(item)}`}
          onClick={() => jump(item)}
        >
          {item}
        </button>
      ))}
      <button onClick={next}>&raquo;</button>
    </div>
  );
});

export default Pagination;
