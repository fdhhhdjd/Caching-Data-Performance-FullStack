import axios from 'axios';

export const getProducts = (limit, page, sort) => {
  return `/products?limit=${limit}&page=${page}&sort=${sort}`;
};

export const getOneProduct = (id) => {
  return `/products/${id}`;
};

export const searchProducts = (value, sort) => {
  return `/products?search=${value}&sort=${sort}`;
};

export const filterProducts = (filter, value, sort) => {
  return `/products?price[${filter}]=${value}&sort=${sort}`;
};

export const createProduct = async (data) => {
  return axios.post('/products', data)
};

export const updateProduct = async (data) => {
  return axios.put(`/products/${data.id}`, data)
};

export const deleteProduct = async (id) => {
  return axios.delete(`/products/${id}`)
};

