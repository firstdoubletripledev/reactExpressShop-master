import { LOGIN_DATA } from "../actions/types";

const LoadingReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_DATA:
      return action.data;
    default:
      return state;
  }
};

export default LoadingReducer;
