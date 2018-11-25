import './App.css';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import getAuth from './components/getAuth';
import isLoginAction from './reduxx/actions/isLoginAction';
import AppRoutes from './Router';

class App extends PureComponent {
  async componentDidMount() {
    const email = await getAuth();
    const { dispatch } = this.props;
    await dispatch(isLoginAction(email));
  }

  render(location) {
    return (
      <Router>
        <>
          <Route path="/" component={AppRoutes} />
        </>
      </Router>
    );
  }
}

const mapStateToProps = ({ isLogin = '' }) => ({
  isLogin,
});

export default connect(mapStateToProps)(App);
