import axios from 'axios';
import { domain } from './domain';

const api = domain();

export const checkoutItem = (userId, data) => {
  return axios.post(`${api}/booking/checkout-session/${userId}`, data);
};

export const getBookingDataByUser = (userId) => {
  return axios.get(`${api}/booking/${userId}`);
};
