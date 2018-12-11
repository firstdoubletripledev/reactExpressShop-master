// import type redux
import { LOGIN_DATA } from '../actions/types';

/**
 *
 *
 * @param {*} [state={}]
 * @param {*} action
 * @returns
 */
const LoadingReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_DATA:
      return action.data;
    default:
      return state;
  }
};

export default LoadingReducer;
