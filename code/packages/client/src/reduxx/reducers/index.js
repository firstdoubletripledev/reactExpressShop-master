import { combineReducers } from "redux";

import isLogin from "./isLoginReducer";
import SLItemCart from "./SLItemCartReducer";
import Loading from "./LoadingReducer";
import LoginData from "./saveLoginDataReducer";

const appReducer = combineReducers({
  isLogin,
  SLItemCart,
  Loading,
  LoginData
});

export default appReducer;
