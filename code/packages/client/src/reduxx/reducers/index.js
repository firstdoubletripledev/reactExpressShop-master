// import combineReducers function from redux
import { combineReducers } from 'redux';

// import Cart Reducer
import Cart from './CartReducer';

// import isLogin Reducer
import isLogin from './isLoginReducer';

// import Loading Reducer
import Loading from './LoadingReducer';

// import LoginData Reducer
import LoginData from './saveLoginDataReducer';

// import SLItemCart Reducer
import SLItemCart from './SLItemCartReducer';

// Create new Reducer
const appReducer = combineReducers({
  isLogin,
  SLItemCart,
  Loading,
  LoginData,
  Cart,
});

// export reducer
export default appReducer;
