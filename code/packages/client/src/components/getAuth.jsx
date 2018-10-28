import Axios from "axios";
import { Subscribe } from "unstated";

async function getAuth() {
  const res = await Axios.get("/api/users/me", {
    headers: {
      authorization: localStorage.getItem("token")
    }
  });
  const { data: { email = "" } = {} } = res.data;
  console.log(email);
  return email;
}

export default getAuth;
