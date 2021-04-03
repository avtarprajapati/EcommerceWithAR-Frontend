import { USER_LOGIN, USER_LOGOUT, USER_SIGNUP } from '../actions/actionType';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return { ...state, userInfo: action.payload };
    case USER_LOGIN:
      return { ...state, userInfo: action.payload };
    case USER_LOGOUT:
      return { ...state, userInfo: null };
    default:
      return { ...state };
  }
};

export default userReducer;
