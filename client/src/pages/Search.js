import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { searchProducts } from '../api/productAPI';
import Products from '../components/Products';
import Sorting from '../components/Sorting';
import { useMyContext } from '../context/store';
import useCustomRouter from '../hooks/useCustomRouter';
import useInfinityQuery from '../hooks/useInfinityQuery';


const Search = () => {
  const limit = 5;
  const { value } = useParams();
  const { sort } = useMyContext()

  const [products, setProducts] = useState([])
  const [stop, setStop] = useState(false)

  const { pushQuery } = useCustomRouter()

  const url = searchProducts(value, sort)
  const { 
    btnRender, data, loading, error 
  } = useInfinityQuery(url, [value, sort], { 
    limit: limit, 
    stop: stop 
  })

  useEffect(() => {
    if(!data) return;
    setProducts(prev => [...prev, ...data.products])

    if(data.products.length < limit)
      return setStop(true)
  },[data, limit])

  useEffect(() => {
    setProducts([])
    setStop(false)
  }, [value, sort])
  

  return <div>
    <Sorting sort={sort}
    calback={(sort) => pushQuery({sort})}
     />
    <Products 
    data={products} 
    loading={loading} 
    error={error} 
    />

    { btnRender() }
  </div>;
};

export default Search;
