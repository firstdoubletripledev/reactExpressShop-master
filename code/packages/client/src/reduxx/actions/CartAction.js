import axios from 'axios';

import { ADD_ITEM_CART, DECREASE_ITEM_CART, REMOVE_ITEM_CART } from './types';

export default {
  getCartAction: function() {
    return function(dispatch) {
      axios
        .get(`/api/cart`)
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

  addItemCartAction: function(productId) {
    return function(dispatch) {
      axios
        .get(`/api/cart/add-to-cart/${productId}`)
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
  decreaseItemCartAction: function(productId) {
    return function(dispatch) {
      axios
        .get(`/api/cart/reduce/${productId}`)
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
  removeItemCartAction: function(productId) {
    return function(dispatch) {
      axios
        .get(`/api/cart/remove/${productId}`)
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
