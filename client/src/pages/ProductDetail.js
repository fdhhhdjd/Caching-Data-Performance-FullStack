import React from 'react';
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../api/productAPI';
import ProductInfo from '../components/ProductInfo';
import useQuery from '../hooks/useQuery';


const ProductDetail = () => {
  const { id } = useParams()
  const url = getOneProduct(id)
  const { data, loading, error } = useQuery(url)

  return <main>
    <ProductInfo 
    product={data} 
    loading={loading} 
    error={error}  
    />
  </main>;
};

export default ProductDetail;
