import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component = null, ...rest }) => {
  const { isLogin = null } = rest;
  const isSuccess = isLogin && localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={propsss =>
        isSuccess ? (
          <Component {...propsss} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: propsss.location }
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
