import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductInfo, useQuery } from "../Import/Index";
const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const { data, loading, error } = useQuery(`/products/${id}`);
  return (
    <main>
      <ProductInfo product={data} loading={loading} error={error} />
    </main>
  );
};

export default ProductDetail;
