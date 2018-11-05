import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import getAuth from "./components/getAuth";

const auth = {
  async getAuth() {
    const res = await getAuth();
    return res;
  }
};

const PrivateRoute = ({ component: Component = null, ...rest }) => {
  // const { isLogin = null } = rest;

  return (
    <Route
      {...rest}
      render={props =>
        auth.getAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
const mapStateToProps = ({ isLogin }) => ({
  isLogin
});

export default connect(mapStateToProps)(PrivateRoute);
