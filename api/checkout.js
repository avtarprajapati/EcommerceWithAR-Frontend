import axios from 'axios';
import { domain } from './domain';

const api = domain();

export const checkoutItem = (userId, data) => {
  return axios.post(`${api}/booking/checkout-session/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_KEY}`,
    },
  });
};
