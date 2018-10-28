import { LOGIN_CHANCE } from "./types";

const ChanceLogin = isLogin => ({
  type: LOGIN_CHANCE,
  isLogin
});

const isLoginAction = email => async (dispatch, getState) => {
  let isLogin = false;
  if (email) {
    isLogin = true;
  }
  dispatch(ChanceLogin(isLogin));
};

export default isLoginAction;
