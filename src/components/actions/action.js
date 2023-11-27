import {ADD_TO_CART} from './constants';

export function addtocart(items) {
  return {
    type: ADD_TO_CART,
    data: items,
  };
}
