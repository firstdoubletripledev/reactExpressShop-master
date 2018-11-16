import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import isLoginAction from "./reduxx/actions/isLoginAction";

import LoadingCompoment from "./components/LoadingCompoment";
import getAuth from "./components/getAuth";
import dashboard from "./components/pages/DashBoardPage";
import CheckoutPage from "./components/pages/checkOut/CheckoutPage";
import PrivateRoute from "./PrivateRoute";

const AsyncHome = Loadable({
  loader: () => import("./components/pages/HomePage"),
  loading: LoadingCompoment
});
const AsyncLoginPage = Loadable({
  loader: () => import("./components/pages/LoginPage"),
  loading: LoadingCompoment
});
const AsyncRegisterPage = Loadable({
  loader: () => import("./components/pages/RegisterPage"),
  loading: LoadingCompoment
});
const AsyncCartPage = Loadable({
  loader: () => import("./components/pages/CartPage"),
  loading: LoadingCompoment
});
const AsyncCheckoutPage = Loadable({
  loader: () => import("./components/pages/checkOut/CheckoutPage"),
  loading: LoadingCompoment
});
const AsyncCategoryPage = Loadable({
  loader: () => import("./components/pages/Category/CategoryPage"),
  loading: LoadingCompoment
});
/* cái này trong app render copy ra  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div>*/

class App extends Component {
  async componentDidMount() {
    const email = await getAuth();
    const { dispatch } = this.props;

    await dispatch(isLoginAction(email));
  }

  render(location) {
    return (
      <Router>
        <>
          <Switch>
            <Route location={location} path="/" exact component={AsyncHome} />
            <Route
              location={location}
              path="/login"
              exact
              component={AsyncLoginPage}
            />
            <Route
              location={location}
              path="/register"
              exact
              component={AsyncRegisterPage}
            />
            <Route
              location={location}
              path="/cart"
              exact
              component={AsyncCartPage}
            />
            <PrivateRoute
              location={location}
              path="/checkout"
      
              component={CheckoutPage}
            />

            <Route
              location={location}
              path="/category"
              exact
              component={AsyncCategoryPage}
            />
            <Route
              location={location}
              path="/category/:page"
              exact
              component={AsyncCategoryPage}
            />
            <PrivateRoute
              location={location}
              path="/dashboard"
              component={dashboard}
            />
          </Switch>
        </>
      </Router>
    );
  }
}

const mapStateToProps = ({ isLogin = "" }) => ({
  isLogin
});

export default connect(mapStateToProps)(App);
