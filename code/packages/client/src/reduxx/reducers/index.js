import { combineReducers } from "redux";

import isLogin from "./isLoginReducer";
import SLItemCart from "./SLItemCartReducer";
import Loading from "./LoadingReducer";
import Cart from "./CartReducer";

const appReducer = combineReducers({
  isLogin,
  SLItemCart,
  Loading,
  Cart
});

export default appReducer;
