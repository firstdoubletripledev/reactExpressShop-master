// import custom style for component
import './App.css';

// import React module from react for JSX
import React, { PureComponent } from 'react';

// import connect function from react-redux
import { connect } from 'react-redux';

// import Route module from react-router-dom for router in react
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// import AppRoutes Component
import AppRoutes from './Router';

/**
 *
 *
 * @class App
 * @extends {PureComponent}
 */
class App extends PureComponent {
  /**
   *
   *
   * @param {*} location
   * @returns
   * @memberof App
   */
  render(location) {
    return (
      <Router>
        <>
          <Switch location={location}>
            {/* Route for login */}

            {/* list of all router in web app */}
            <AppRoutes location={location} />
          </Switch>
        </>
      </Router>
    );
  }
}

/**
 *
 * Connect props to redux state
 * @param {*} { isLogin = '' }
 */
const mapStateToProps = ({ isLogin = '' }) => ({
  isLogin,
});

// Export Component
export default connect(mapStateToProps)(App);
