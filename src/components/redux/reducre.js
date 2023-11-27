import {ADD_TO_CART} from '../actions/constants';

const initialState = [];
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        action: data,
        ...state,
      };

    default:
      return state;
  }
};
