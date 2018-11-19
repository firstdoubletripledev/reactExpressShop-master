import { combineReducers } from "redux";

import isLogin from "./isLoginReducer";
import SLItemCart from "./SLItemCartReducer";
import Loading from "./LoadingReducer";
import LoginData from "./saveLoginDataReducer";
import Cart from "./CartReducer";

const appReducer = combineReducers({
  isLogin,
  SLItemCart,
  Loading,
  LoginData,
  Cart
});

export default appReducer;
