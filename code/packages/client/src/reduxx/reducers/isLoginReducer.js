import { LOGIN_CHANCE } from "../actions/types";

const isLoginReducer = (state = false, action) => {
  switch (action.type) {
    case LOGIN_CHANCE:
      return action.isLogin;
    default:
      return state;
  }
};

export default isLoginReducer;
