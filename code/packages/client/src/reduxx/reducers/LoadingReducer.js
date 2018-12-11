// import type redux
import { LOADING_CHANGE } from '../actions/types';

/**
 *
 *
 * @param {boolean} [state=false]
 * @param {*} action
 * @returns
 */
const LoadingReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING_CHANGE:
      return action.isLogin;
    default:
      return state;
  }
};

export default LoadingReducer;
