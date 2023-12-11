import {
  REGISTER_USER,
  SET_LOGIN_USER,
  SET_LOGOUT,
} from '../actions/actionTypes';

//initializing state
const initialState = {
  all_users: [],
  current_user: {},
  is_remember: false,
  remember_email: '',
  remember_password: '',
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGOUT:
      return {
        ...state,
        current_user: {},
      };
    case REGISTER_USER:
      return {
        ...state,
        all_users: action.payload,
      };
    case SET_LOGIN_USER:
      return {
        ...state,
        current_user: action.payload?.user,
        is_remember: action.payload?.is_remember,
        remember_email: action.payload?.is_remember
          ? action.payload?.user.email
          : '',
        remember_password: action.payload?.is_remember
          ? action.payload?.user.password
          : '',
      };

    default:
      return state;
  }
};
export default authReducer;
