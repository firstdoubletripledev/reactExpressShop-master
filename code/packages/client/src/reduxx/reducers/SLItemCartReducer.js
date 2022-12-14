// import type redux
import { ADD_ITEM_CART, GET_SL_ITEM_CART } from '../actions/types';

/**
 *
 *
 * @param {number} [SLItemCart=0]
 * @param {*} action
 * @returns
 */
const SLItemCartReducer = (SLItemCart = 0, action) => {
  switch (action.type) {
    case GET_SL_ITEM_CART:
      return action.item;
    case ADD_ITEM_CART:
      return SLItemCart + 1;
    default:
      return SLItemCart;
  }
};

export default SLItemCartReducer;
