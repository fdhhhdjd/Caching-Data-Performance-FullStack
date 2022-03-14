import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Products, useQuery, Pagination } from "../Import/Index";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const { search } = useLocation();
  const { data, loading, error } = useQuery(
    `/products?limit=${limit}&page=${page}`
  );
  useEffect(() => {
    if (data?.products) setProducts(data.products);
  }, [data?.products]);
  const totalPages = useMemo(() => {
    if (!data?.count) return 0;
    return Math.ceil(data.count / limit);
  }, [data?.count]);
  useEffect(() => {
    const page = new URLSearchParams(search).get("page") || 1;
    setPage(Number(page));
  }, [search]);
  return (
    <>
      <main>
        <Products data={products} loading={loading} error={error} />
        <Pagination totalPages={totalPages} page={page} />
      </main>
    </>
  );
};

export default Home;
