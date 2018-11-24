import Axios from 'axios';
// import { Subscribe } from "unstated";
import store from '../reduxx/storeConfig';
import { saveLoginDataAction } from '../reduxx/actions/isLoginAction';

async function getAuth() {
  const res = await Axios.get('/api/users/me', {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  });
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
