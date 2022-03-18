import React, { useCallback, useEffect, useRef, useState } from "react";
import { useQuery } from "../Import/Index";
const DEFAULT_OPTION = {
  stop: true,
  firstLoad: false,
};
const useInfinity = ({ url, depend = [], opt }) => {
  const [page, setPage] = useState(1);
  const btnRef = useRef();
  const option = { ...DEFAULT_OPTION, ...opt };
  const query = useQuery(`${url}&page=${page}`);
  useEffect(() => {
    setPage(1);
  }, depend);
  const LoadInfinity = useCallback(() => {
    if (option.stop) return;
    setPage((prev) => prev + 1);
  }, [option.stop]);
  useEffect(() => {
    const btn = btnRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && option.firstLoad) {
        LoadInfinity();
      }
    });
    if (btn) observer.observe(btn);
    return () => {
      if (btn) observer.unobserve(btn);
    };
  }, [LoadInfinity, option.firstLoad]);
  const BtnRender = () => {
    return (
      <React.Fragment>
        {!option.stop && (
          <button
            className="btn btn-load_more"
            onClick={LoadInfinity}
            ref={btnRef}
          >
            Load More
          </button>
        )}
      </React.Fragment>
    );
  };
  return { BtnRender, ...query };
};

export default useInfinity;
