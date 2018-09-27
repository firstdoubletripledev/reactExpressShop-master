import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import LoadingCompoment from "./components/LoadingCompoment";

const AsyncHome = Loadable({
  loader: () => import("./components/pages/HomePage"),
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
    </Switch> );
  }
}

export default App;
