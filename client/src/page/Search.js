import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products, Sorting, useInfinity, useMyContext } from "../Import/Index";
const Search = () => {
  const { value } = useParams();
  const [products, setProducts] = useState([]);
  const { sort } = useMyContext();
  const [limit] = useState(2);
  const [stop, setStop] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  // const { data, loading, error } = useQuery(
  //   `/products?search=${value}&sort=${sort}&limit=${limit}&page=${page}`,
  //   { saveCache: true }
  // );
  const { data, loading, error, BtnRender } = useInfinity({
    url: `/products?search=${value}&sort=${sort}&limit=${limit}`,
    depend: [value, sort],
    opt: { stop, firstLoad },
  });

  useEffect(() => {
    if (data?.products) {
      setProducts((prev) => [...prev, ...data.products]);
      setFirstLoad(true);
      if (data.products.length < limit) setStop(true);
    }
  }, [data?.products, limit]);
  useEffect(() => {
    setProducts([]);
    // setPage(1);
    setStop(false);
    setFirstLoad(false);
  }, [value, sort]);
  // const LoadInfinity = useCallback(() => {
  //   if (stop) return;
  //   setPage((prev) => prev + 1);
  // }, [stop]);
  // useEffect(() => {
  //   const btn = btnRef.current;
  //   const observer = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting && firstLoad) {
  //       LoadInfinity();
  //     }
  //   });
  //   if (btn) observer.observe(btn);
  //   return () => {
  //     if (btn) observer.unobserve(btn);
  //   };
  // }, [LoadInfinity, firstLoad]);
  return (
    <>
      <Sorting />
      <Products data={products} loading={loading} error={error} />
      {BtnRender()}
    </>
  );
};

export default Search;
