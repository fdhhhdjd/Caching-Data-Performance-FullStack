import axios from "axios";
import React, { useRef } from "react";
import { useMutation, createProduct, updateProduct } from "../Import/Index";
const ProductForm = ({ btnTxt, data }) => {
  const titleRef = useRef();
  const { mutate, loading } = useMutation();
  const handleSubmit = (e) => {
    e.preventDefault();

    const children = titleRef.current.children;
    const newData = [...children].reduce((obj, child) => {
      if (!child.name) return obj;
      return { ...obj, [child.name]: child.value };
    }, {});
    if (data) {
      const result = ShallowEqual(newData, data);
      console.log(result);
      if (result) return;
      mutate(() => updateProduct({ id: data._id, newData }));

      // axios
      //   .put(`products/${data._id}`, newData)
      //   .then((res) => console.log(res));
    } else {
      mutate(() => createProduct(newData));
    }
  };
  const ShallowEqual = (obj1, obj2) => {
    const keys = Object.keys(obj1);
    for (let key of keys) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
      return true;
    }
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
            defaultValue={data?.title}
          />
          <input
            type="text"
            placeholder="Product description"
            required
            name="description"
            defaultValue={data?.description}
          />
          <input
            type="text"
            name="price"
            placeholder="Product price"
            required
            defaultValue={data?.price}
          />
          <input
            type="text"
            placeholder="Product category"
            name="category"
            required
            defaultValue={data?.category}
          />
          <input
            type="text"
            placeholder="Product image"
            name="image"
            required
            defaultValue={data?.image}
          />
          <button disabled={loading}>{loading ? "Loading..." : btnTxt}</button>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
