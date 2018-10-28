import { combineReducers } from "redux";

import isLogin from "./isLoginReducer";
import SLItemCart from "./SLItemCartReducer";
import Loading from "./LoadingReducer";

const appReducer = combineReducers({
  isLogin,
  SLItemCart,
  Loading
});

export default appReducer;
