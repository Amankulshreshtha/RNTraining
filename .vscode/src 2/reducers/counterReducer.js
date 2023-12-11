import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SAVE_COUNTRY,
} from '../actions/actionTypes';

//initializing state
const initialState = {
  counter: 0,
  list: [],
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case SAVE_COUNTRY:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};
export default counterReducer;
