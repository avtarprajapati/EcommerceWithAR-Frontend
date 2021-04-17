import axios from 'axios';
import { domain } from './domain';

const api = domain();

export const checkoutItem = (userId, data) => {
  return axios.post(`${api}/booking/checkout-session/${userId}`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bear sk_test_51IfReySCdPtYj5Y27lgBpbHIv2zeRqiXfcZFSEJ4hh71ePtVtemfj6cqyQEwjbrbH6U1natMKSjdTOR3qPCIMy2l00XQhJ3vX6',
    },
  });
};

export const getBookingDataByUser = (userId) => {
  return axios.get(`${api}/booking/${userId}`);
};
