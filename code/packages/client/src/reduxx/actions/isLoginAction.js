import { LOGIN_CHANCE, LOGIN_DATA } from "./types";

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

const ChanceLoginData = data => ({
  type: LOGIN_DATA,
  data
});

const saveLoginDataAction = data => (dispatch, getState) => {
  dispatch(ChanceLoginData(data));
};

export default isLoginAction;
export { saveLoginDataAction };
