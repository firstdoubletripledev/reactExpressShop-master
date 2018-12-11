// import Axios module from axios for Promise based HTTP request
import Axios from 'axios';

import { ADD_ITEM_CART, DECREASE_ITEM_CART, REMOVE_ITEM_CART } from './types';

export default {
  /**
   *
   *
   * @returns
   */
  getCartAction: function() {
    return function(dispatch) {
      Axios.get(`/api/cart`)
        .then(response => {
          dispatch({
            type: ADD_ITEM_CART,
            payload: response.data,
          });
        })
        .catch(error => {
          console.log(error);
        });
    };
  },

  /**
   *
   *
   * @param {*} productId
   * @returns
   */
  addItemCartAction: function(productId) {
    return function(dispatch) {
      Axios.get(`/api/cart/add-to-cart/${productId}`)
        .then(response => {
          dispatch({
            type: ADD_ITEM_CART,
            payload: response.data,
          });
        })
        .catch(error => {
          console.log(error);
        });
    };
  },

  /**
   *
   *
   * @param {*} productId
   * @returns
   */
  decreaseItemCartAction: function(productId) {
    return function(dispatch) {
      Axios.get(`/api/cart/reduce/${productId}`)
        .then(response => {
          dispatch({
            type: DECREASE_ITEM_CART,
            payload: response.data,
          });
        })
        .catch(error => {
          console.log(error);
        });
    };
  },

  /**
   *
   *
   * @param {*} productId
   * @returns
   */
  removeItemCartAction: function(productId) {
    return function(dispatch) {
      Axios.get(`/api/cart/remove/${productId}`)
        .then(response => {
          dispatch({
            type: REMOVE_ITEM_CART,
            payload: response.data,
          });
        })
        .catch(error => {
          console.log(error);
        });
    };
  },
};
