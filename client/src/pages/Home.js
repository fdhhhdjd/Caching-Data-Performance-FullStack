import React, { useState, useMemo } from 'react';
import { getProducts } from '../api/productAPI';

import Pagination from '../components/Pagination';
import Products from '../components/Products';
import Sorting from '../components/Sorting';
import { useMyContext } from '../context/store';
import useCustomRouter from '../hooks/useCustomRouter';
import useQuery from '../hooks/useQuery';

const Home = () => {
  const { refresh, page, limit, sort } = useMyContext()
  const [products, setProducts] = useState([])

  const { pushQuery } = useCustomRouter()

  const url = getProducts(limit, page, sort)
  const { data, loading, error } = useQuery(url, [refresh], {
    saveCache: true
  })

  const totalPages = useMemo(() => {
    if(!data) return 0;
    setProducts(() => data.products)
    return Math.ceil(data.count/limit)
  }, [data, limit]);
 
  
  return <main>
    <Sorting sort={sort}
    calback={(sort) => pushQuery({page, sort})}
     />
    <Products 
    data={products} 
    loading={loading} 
    error={error} 
    />
    <Pagination totalPages={totalPages}/>
  </main>;
};

export default Home;
