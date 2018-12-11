import { LOGIN_CHANCE, LOGIN_DATA } from './types';

/**
 *
 *
 * @param {*} isLogin
 */
const ChanceLogin = isLogin => ({
  type: LOGIN_CHANCE,
  isLogin,
});

/**
 *
 *
 * @param {*} dispatch
 * @param {*} getState
 */
const isLoginAction = code => async (dispatch, getState) => {
  let isLogin = false;
  if (code) {
    isLogin = true;
  }
  dispatch(ChanceLogin(isLogin));
};

/**
 *
 *
 * @param {*} data
 */
const ChanceLoginData = data => ({
  type: LOGIN_DATA,
  data,
});

/**
 *
 *
 * @param {*} dispatch
 * @param {*} getState
 */
const saveLoginDataAction = data => (dispatch, getState) => {
  dispatch(ChanceLoginData(data));
};

// export module, function
export default isLoginAction;
export { saveLoginDataAction };
