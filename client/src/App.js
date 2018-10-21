import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import LoadingCompoment from "./components/LoadingCompoment";
import dashboard from './components/pages/DashBoardPage'

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
  loader: () => import("./components/pages/CheckoutPage"),
  loading: LoadingCompoment
});
const AsyncCategoryPage = Loadable({
  loader: () => import("./components/pages/CategoryPage"),
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
  render(location) {
    return (

    <Switch>
    <Route location={location} path="/" exact component={AsyncHome} />
    <Route location={location} path="/login" exact component={AsyncLoginPage} />
    <Route location={location} path="/register" exact component={AsyncRegisterPage} />
    <Route location={location} path="/cart" exact component={AsyncCartPage} />
    <Route location={location} path="/checkout" exact component={AsyncCheckoutPage} />
    <Route location={location} path="/category" exact component={AsyncCategoryPage} />
    <Route location={location} path="/dashboard" component={dashboard}/>
    </Switch> );
  }
}

export default App;
