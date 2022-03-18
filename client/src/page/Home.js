import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Pagination,
  Products,
  Sorting,
  useMyContext,
  useQuery,
} from "../Import/Index";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);
  const ref = useRef(0);
  const { page, sort, refetching } = useMyContext();
  const { data, loading, error } = useQuery(
    `/products?limit=${limit}&page=${page}&sort=${sort}`,
    {
      saveCache: true,
      refetching,
    }
  );
  useEffect(() => {
    if (data?.products) setProducts(data.products);
  }, [data?.products]);
  const totalPages = useMemo(() => {
    if (!data?.count) return 0;
    return Math.ceil(data.count / limit);
  }, [data?.count, limit]);

  return (
    <>
      <main>
        <h1>render:{ref.current++}</h1>
        <Sorting />
        <Products data={products} loading={loading} error={error} />
        <Pagination totalPages={totalPages} />
      </main>
    </>
  );
};

export default Home;
