import './App.css';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './Router';

class App extends PureComponent {
  render(location) {
    return (
      <Router>
        <>
          <AppRoutes location={location} />
        </>
      </Router>
    );
  }
}

const mapStateToProps = ({ isLogin = '' }) => ({
  isLogin,
});

export default connect(mapStateToProps)(App);
