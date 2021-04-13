import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_SIGNUP,
  ADDED_TO_CART,
} from '../actions/actionType';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return { ...state, userInfo: action.payload };

    case USER_LOGIN:
      return { ...state, userInfo: action.payload };

    case USER_LOGOUT:
      return { ...state, userInfo: null };

    case ADDED_TO_CART:
      return {
        ...state,
        userInfo: { ...state.userInfo, carts: action.payload },
      };

    default:
      return { ...state };
  }
};

export default userReducer;
