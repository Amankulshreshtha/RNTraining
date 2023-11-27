import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions/actionTypes';

//initializing state
const initialState = {
  name: 'Priya',
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Test':
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default authReducer;
