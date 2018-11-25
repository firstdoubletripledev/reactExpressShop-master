import { LOADING_CHANGE } from '../actions/types';

const LoadingReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING_CHANGE:
      return action.isLogin;
    default:
      return state;
  }
};

export default LoadingReducer;
