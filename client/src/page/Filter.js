import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products, useInfinity, useMyContext, Sorting } from "../Import/Index";
const Filter = () => {
  //

  const { sort } = useMyContext();
  const [limit] = useState(2);
  const [stop, setStop] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);

  const { option, value } = useParams();
  const [products, setProducts] = useState([]);
  const { data, loading, error, BtnRender } = useInfinity({
    url: `products?price[${option}]=${value}&sort=${sort}&limit=${limit}`,
    depend: [value, sort, option],
    opt: { stop, firstLoad },
  });
  useEffect(() => {
    if (data?.products) setProducts(data.products);
  }, [data?.products]);
  //Infinity
  useEffect(() => {
    if (data?.products) {
      setProducts((prev) => [...prev, ...data.products]);
      setFirstLoad(true);
      if (data.products.length < limit) setStop(true);
    }
  }, [data?.products, limit]);
  useEffect(() => {
    setProducts([]);
    setStop(false);
    setFirstLoad(false);
  }, [value, sort, option]);
  return (
    <>
      <Sorting />
      <Products data={products} loading={loading} error={error} />
      {BtnRender()}
    </>
  );
};

export default Filter;
