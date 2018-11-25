import Axios from 'axios';

import { saveLoginDataAction } from '../reduxx/actions/isLoginAction';
import store from '../reduxx/storeConfig';

// import { Subscribe } from "unstated";
async function getAuth() {
  const res = await Axios.get('/api/users/me', {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }).catch(error => {
    console.log(error);
  });
  console.log(res);
  if (!res) {
    return 0;
  }
  const { data: { role = null } = {}, code = 0 } = res.data;
  if (code === 1) {
    store.dispatch(saveLoginDataAction(res.data.data));
    if (role === 'admin') {
      return 2;
    }
  }
  return code;
}

export default getAuth;
