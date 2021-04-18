import axios from 'axios';
import { domain } from './domain';

const api = domain();

export const getAllProduct = () => {
  return axios.get(`${api}/products`);
};

export const addProduct = (product) => {
  return axios.post(`${api}/products`, product);
};

export const getProductById = (id) => {
  return axios.get(`${api}/products/${id}`);
};

export const updateProduct = (id, data) => {
  return axios.patch(`${api}/products/${id}`, data);
};

export const deleteProduct = (id) => {
  return axios.delete(`${api}/products/${id}`);
};
