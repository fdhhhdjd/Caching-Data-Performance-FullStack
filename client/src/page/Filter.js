import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, Products } from "../Import/Index";
const Filter = () => {
  const { option, value } = useParams();
  const [products, setProducts] = useState([]);
  const { data, loading, error } = useQuery(
    `products?price[${option}]=${value}`
  );
  useEffect(() => {
    if (data?.products) setProducts(data.products);
  }, [data?.products]);
  return (
    <>
      <Products data={products} loading={loading} error={error} />
    </>
  );
};

export default Filter;
