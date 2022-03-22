import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductInfo, useQuery } from "../Import/Index";
const ProductDetail = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(`/products/${id}`, {
    saveCache: true,
  });
  return (
    <main>
      <ProductInfo product={data} loading={loading} error={error} />
    </main>
  );
};

export default ProductDetail;
