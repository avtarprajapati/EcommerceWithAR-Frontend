import axios from 'axios';
import { domain } from './domain';

const api = domain();

export const createUser = (user) => {
  return axios.post(`${api}/api/v1/users`, user);
};

export const getUserByEmail = () => {
  return axios.get(`${api}/api/v1/users`);
};

export const getUserById = (id) => {
  return axios.get(`${api}/api/v1/users/one?profileId=${id}`);
};
