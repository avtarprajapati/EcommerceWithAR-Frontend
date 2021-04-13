import axios from 'axios';
import { domain } from './domain';

const api = domain();

export const getUserProducts = (userId) => {
  return axios.get(`${api}/carts/${userId}`);
};
