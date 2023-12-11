import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SAVE_COUNTRY,
} from './actionTypes';
export const incrementCounterAction = parameter => {
  return {
    type: INCREMENT_COUNTER,
    payload: parameter,
  };
};
export const decrementCounterAction = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};
export const saveCountryAction = data => {
  return {
    type: SAVE_COUNTRY,
    payload: data,
  };
};

export function getCountryList(props) {
  return async (dispatch, getState) => {
    console.log(props, 'My callback....');
    try {
      const response = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,flags',
      );

      const data = await response.json();

      dispatch(saveCountryAction(data));
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };
}
