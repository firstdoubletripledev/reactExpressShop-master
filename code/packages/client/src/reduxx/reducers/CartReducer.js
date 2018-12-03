// import type redux
import {
  ADD_ITEM_CART,
  DECREASE_ITEM_CART,
  GET_CART,
  REMOVE_ITEM_CART,
} from '../actions/types';

/**
 *
 *
 * @param {*} [Cart={}]
 * @param {*} action
 * @returns
 */
const CartReducer = (Cart = {}, action) => {
  switch (action.type) {
    case ADD_ITEM_CART: {
      return action.payload;
    }
    case DECREASE_ITEM_CART: {
      return action.payload;
    }
    case REMOVE_ITEM_CART: {
      return action.payload;
    }
    case GET_CART: {
      return action.payload;
    }
    default:
      return Cart;
  }
};
export default CartReducer;
