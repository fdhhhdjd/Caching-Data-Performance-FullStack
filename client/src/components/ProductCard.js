import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteProduct,
  Modal,
  ProductForm,
  useMutation,
} from "../Import/Index";
import LazyLoadImg from "./LazyLoadImg";
const ProductCard = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);
  const { mutate, loading } = useMutation();
  const handleDeleteProduct = (id) => {
    if (window.confirm("Do you want to delete this ?")) {
      mutate(() => deleteProduct(id));
      axios.delete(`products/${id}`).then((res) => console.log(res));
    }
  };

  return (
    <>
      <div className="card">
        {/* <img alt={product.image} ref={imgRef} /> */}
        <LazyLoadImg url={product.image} />
        <div className="box">
          <h3>
            <Link to={`/products/${product._id}`}>
              <span />
              {product.title}
            </Link>
          </h3>
          <h4>${product.price}</h4>

          <div className="btn_div">
            <button className="btn_edit" onClick={() => setOpenModal(true)}>
              Edit
            </button>
            <button
              className="btn_delete"
              onClick={() => handleDeleteProduct(product._id)}
              disabled={loading}
            >
              {loading ? "...Loading" : "Delete"}
            </button>
          </div>
        </div>

        <div>
          {openModal && (
            <Modal titleTxt="Update Product" setOpen={setOpenModal}>
              <ProductForm btnTxt="Update" data={product} />
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
