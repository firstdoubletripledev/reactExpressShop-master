// import Axios module from axios for Promise based HTTP request
import Axios from 'axios';

// import redux action
import { saveLoginDataAction } from '../reduxx/actions/isLoginAction';

// import store from redux config
import store from '../reduxx/storeConfig';

/**
 *
 *
 * @returns
 */
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

// export component
export default getAuth;
