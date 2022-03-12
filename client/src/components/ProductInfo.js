import React from 'react';

const ProductInfo = ({ product, loading, error }) => {
  if(error) return <h2>{error}</h2>
  return <section className='product_info'>
    {
      product &&  
      <>
        <img src={product.image} alt={product.image} />
        <div className='box'>
          <h2>{product.title}</h2>
          <h3>${product.price}</h3>
          <p>{product.description}</p>
          <h4>Category: {product.category}</h4>
          <button>Add to cart</button>
        </div>
      </>
    }

    { loading && <h2>Loading...</h2>}
  </section>;
};

export default ProductInfo;
