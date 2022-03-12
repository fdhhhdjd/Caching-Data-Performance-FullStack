import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "./Modal";
import ProductForm from "./ProductForm";
import { deleteProduct } from "../api/productAPI";
import useMutation from "../hooks/useMutation";

const ProductCard = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);
  // const { refresh, setRefresh } = useContext(Store)
  const { mutate } = useMutation();
  const handleDeleteProduct = (id) => {
    if (window.confirm("Do you want to delete this?")) {
      // deleteProduct(id).then(setRefresh(!refresh))
      mutate(() => deleteProduct(id));
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.image} />

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
          >
            Delete
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
  );
};

export default ProductCard;
