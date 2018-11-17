import Axios from "axios";
// import { Subscribe } from "unstated";

async function getAuth() {
  const res = await Axios.get("/api/users/me", {
    headers: {
      authorization: localStorage.getItem("token")
    }
  });
  const { data: { email = null } = {} } = res.data;
  if (!email) {
    return false;
  }
  return true;
}

export default getAuth;
