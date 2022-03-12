import React from 'react';
import ProductCard from './ProductCard';

const Products = React.memo(({ data, loading, error }) => {
  
  if(error) return <h2>{error}</h2>;
  return <section>
    <div className='products'>
      {
        data.map(product => (
          <ProductCard key={product._id} product={product} />
        ))
      }
    </div>
    
    { loading && <h2 style={{textAlign: 'center'}}>Loading...</h2> }
  </section>;
});

export default Products;
