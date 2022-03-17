import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useMutation } from "../Import/Index";
const ProductForm = ({ btnTxt, data }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");
  const titleRef = useRef();
  const { loading } = useMutation();
  const handleSubmit = (e) => {
    e.preventDefault();

    const children = titleRef.current.children;
    const newData = [...children].reduce((obj, child) => {
      if (!child.name) return obj;
      return { ...obj, [child.name]: child.value };
    }, {});
    axios.post(`/products`, newData).then((res) => console.log(res));
    console.log(newData);
  };

  return (
    <>
      <div className="product_form">
        <form ref={titleRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product title"
            required
            name="title"
          />
          <input
            type="text"
            placeholder="Product description"
            required
            name="description"
          />
          <input
            type="text"
            value={price}
            name="price"
            placeholder="Product price"
            required
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Product category"
            name="category"
            required
          />
          <input
            type="text"
            placeholder="Product image"
            name="image"
            required
          />

          <button>{loading ? "Loading..." : btnTxt}</button>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
