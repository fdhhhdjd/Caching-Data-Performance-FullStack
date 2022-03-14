import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../Import/Index";
const ProductCard = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);
  // const { refresh, setRefresh } = useContext(Store)

  const handleDeleteProduct = (id) => {};
  return (
    <>
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
              {/* <ProductForm btnTxt="Update" data={product} /> */}
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
