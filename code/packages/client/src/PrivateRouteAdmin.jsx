import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import getAuth from "./components/getAuth";

const auth = {
  async getAuth() {
    const res = await getAuth();
    console.log(res);
    return res;
  }
};

const PrivateRouteAdmin = ({ component: Component = null, ...rest }) => {
  const { isLogin = null } = rest;

  return (
    <Route
      {...rest}
      render={props =>
        auth.getAuth === 2 && isLogin === true ? (
          <Component {...props} />
        ) : (
          <>
            {alert(
              "Sorry this is for admin if you want to access this please contact to Admin"
            )}
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          </>
        )
      }
    />
  );
};
const mapStateToProps = ({ isLogin }) => ({
  isLogin
});

export default connect(mapStateToProps)(PrivateRouteAdmin);
