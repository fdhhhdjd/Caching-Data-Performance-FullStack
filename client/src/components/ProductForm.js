import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../api/productAPI';
import useMutation from '../hooks/useMutation';

const ProductForm = ({btnTxt, data}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [id, setId] = useState('')
  const { mutate, loading } = useMutation()

  const handleSunmit = (e) => {
    e.preventDefault()
    let newData = { title, description, image, price, category };
    if(id){
      mutate(() => updateProduct({...newData, id}))
    }else{
      mutate(() => createProduct(newData))
    }
  }

  useEffect(() => {
    if(data) {
      setTitle(data.title)
      setDescription(data.description)
      setPrice(data.price)
      setImage(data.image)
      setCategory(data.category)
      setId(data._id)
    }
  },[data])

  return <div className='product_form'>
    <form onSubmit={handleSunmit}>
      <input type="text" value={title}
      placeholder="Product title" required
      onChange={e => setTitle(e.target.value)} 
      />
      <input type="text" value={description}
      placeholder="Product description" required
      onChange={e => setDescription(e.target.value)} 
      />
      <input type="text" value={price}
      placeholder="Product price" required
      onChange={e => setPrice(e.target.value)} 
      />
      <input type="text" value={category}
      placeholder="Product category" required
      onChange={e => setCategory(e.target.value)} 
      />
      <input type="text" value={image}
      placeholder="Product image" required
      onChange={e => setImage(e.target.value)} 
      />
      
      <button>
        { loading ? 'Loading...' : btnTxt }
      </button>
    </form>
  </div>;
};

export default ProductForm;
