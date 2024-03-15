import * as types from '../actions/types';

const initialState = {
  user: [], 
  ownerId: null,
  currentuser: null,
  profile: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER:
      return {
        ...state,
        user: [action.payload],
      };
    case types.LOGIN_USER:
      return {
        ...state,
        user: [action.payload, ...state.user],
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    case types.POSTDATA:
      return {
        ...state,
        user: [action.payload, ...state.user],
      };
    case types.STORE_OWNER_ID:
      return {
        ...state,
        ownerId: action.payload,
      };
    case types.PROFILE: 
      return {
        ...state,
        profile: action.payload,
      };
      case types.LOGOUT_USER:
        return {
          ...initialState, 
        };
        

    // PERSIST_USER_DATA case removed as persistence is handled elsewhere
    default:
      return state;
  }
};

export default userReducer;
