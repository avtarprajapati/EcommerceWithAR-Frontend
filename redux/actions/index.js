import Router from 'next/router';
import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_SIGNUP,
  USER_VERIFY,
  ADDED_TO_CART,
} from './actionType';
import { createUser, getUserByProfileId, updateUser } from '../../api/user';

import { auth } from '../../firebase';

export const userSignUp = (user) => async (dispatch) => {
  const { data } = await createUser({ ...user, carts: [] });
  dispatch({ type: USER_SIGNUP, payload: data.data });
};

export const userLogin = (user) => {
  return { type: USER_LOGIN, payload: user };
};

export const userLogout = () => async (dispatch) => {
  await auth
    .signOut()
    .then(() => {
      dispatch({
        type: USER_LOGOUT,
      });
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

export const verifyUser = () => async (dispatch) => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const userId = user.uid;
      const { data } = await getUserByProfileId(userId);
      if (data.data.length) {
        dispatch(userLogin({ ...data.data[0] }));
      } else {
        console.log('not any user please register first');
      }
    }
  });
};

export const addToCart = (userId, cartsData) => async (dispatch, getState) => {
  const res = await updateUser(userId, {
    carts: cartsData.carts,
  });

  dispatch({ type: ADDED_TO_CART, payload: cartsData.carts });
};
