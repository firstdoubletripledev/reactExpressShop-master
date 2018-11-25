import { combineReducers } from 'redux';

import Cart from './CartReducer';
import isLogin from './isLoginReducer';
import Loading from './LoadingReducer';
import LoginData from './saveLoginDataReducer';
import SLItemCart from './SLItemCartReducer';

const appReducer = combineReducers({
  isLogin,
  SLItemCart,
  Loading,
  LoginData,
  Cart,
});

export default appReducer;
