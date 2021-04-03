import Router from 'next/router';
import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_SIGNUP,
  USER_VERIFY,
} from './actionType';
import { createUser } from '../../api/user';
import { getUserById } from '../../api/user';

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
      const { data } = await getUserById(userId);
      if (data.data.length) {
        dispatch(userLogin({ ...data.data[0] }));
      } else {
        console.log('not any user please register first');
      }
    }
  });
};
