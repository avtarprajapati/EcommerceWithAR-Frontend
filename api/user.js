import axios from 'axios';
import { domain } from './domain';

const api = domain();

export const createUser = (user) => {
  return axios.post(`${api}/users`, user);
};

export const getUserByEmail = () => {
  return axios.get(`${api}/users`);
};

export const getUserByProfileId = (id) => {
  return axios.get(`${api}/users/${id}`);
};

export const updateUser = (id, updateData) => {
  return axios.patch(`${api}/users/${id}`, updateData);
};
