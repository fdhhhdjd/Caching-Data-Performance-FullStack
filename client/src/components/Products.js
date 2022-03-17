import React, { useRef } from "react";
import { ProductCard } from "../Import/Index";

const Products = React.memo(({ data, loading, error }) => {
  const ref = useRef(0);

  if (error) return <h2>{error}</h2>;
  return (
    <section>
      <h1>render: {ref.current++}</h1>
      <div className="products">
        {data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {loading && <h2 style={{ textAlign: "center" }}>Loading...</h2>}
    </section>
  );
});

export default Products;
